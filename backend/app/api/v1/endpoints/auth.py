import os
import random
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import List, Dict
import bcrypt
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.user import User
from app.schemas.auth import (
    UserCreate,
    UserLogin,
    UserResponse,
    Token,
    SendOTPRequest,
    SendOTPResponse,
)
from app.utils.logger import logger

router = APIRouter()

# In-memory store for OTPs: { email: { "otp": "123456", "expires_at": float } }
otp_cache: Dict[str, Dict] = {}

# SMTP Configuration
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")

def send_real_email_otp(to_email: str, otp_code: str) -> bool:
    """Sends a real branded verification email via SMTP if credentials are configured."""
    if not SMTP_USER or not SMTP_PASSWORD:
        logger.warning(f"SMTP credentials not set in .env. OTP for {to_email} is {otp_code}")
        print(f"\n==========================================")
        print(f"  [EMAIL DISPATCH] Verification OTP for {to_email}: {otp_code}")
        print(f"  (To send actual inbox emails, configure SMTP_USER & SMTP_PASSWORD in backend/.env)")
        print(f"==========================================\n")
        return False

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Your OptiFit 3D Verification Code: {otp_code}"
        msg["From"] = f"OptiFit 3D <{SMTP_USER}>"
        msg["To"] = to_email

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F5EE; padding: 30px; margin: 0;">
            <div style="max-width: 480px; margin: 0 auto; background-color: #FAF8F3; border: 1px solid #CAD8C5; border-radius: 20px; padding: 32px; box-shadow: 0 4px 16px rgba(62,77,42,0.08);">
                <div style="margin-bottom: 20px;">
                    <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #3E4D2A; text-transform: uppercase; letter-spacing: 1px;">
                        OPTIFIT 3D PORTAL
                    </span>
                    <h2 style="color: #1F2818; margin: 6px 0 0 0; font-size: 22px;">Confirm Your Email</h2>
                </div>
                <p style="color: #526049; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
                    Thank you for signing up with OptiFit 3D. Please use the verification code below to verify your account and begin your 3D custom fitting analysis:
                </p>
                <div style="text-align: center; margin: 28px 0;">
                    <div style="display: inline-block; background-color: #E9E4CF; border: 1px solid #CAD8C5; border-radius: 14px; padding: 14px 28px;">
                        <span style="font-family: monospace; font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #3E4D2A;">
                            {otp_code}
                        </span>
                    </div>
                </div>
                <p style="color: #7E8F6A; font-size: 12px; line-height: 1.5; margin-top: 24px; border-top: 1px solid #CAD8C5; padding-top: 16px;">
                    This code will expire in 10 minutes. If you did not request this verification, you can safely ignore this email.
                </p>
            </div>
        </body>
        </html>
        """
        msg.attach(MIMEText(html_content, "html"))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=12) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)

        logger.info(f"Sent actual email OTP to {to_email}")
        return True
    except Exception as e:
        logger.error(f"SMTP delivery error to {to_email}: {e}")
        return False

def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))
    except Exception:
        return False

def get_password_hash(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

@router.post("/send-otp", response_model=SendOTPResponse)
def send_otp(request: SendOTPRequest):
    email = request.email.lower().strip()
    otp_code = str(random.randint(100000, 999999))
    otp_cache[email] = {
        "otp": otp_code,
        "expires_at": time.time() + 600  # 10 minutes
    }
    
    # Attempt real email delivery
    email_delivered = send_real_email_otp(email, otp_code)
    
    msg = f"Verification code sent to {email}" if email_delivered else f"Verification code generated for {email}"
    return {
        "message": msg,
        "otp_preview": otp_code
    }

@router.post("/signup", response_model=Token)
def signup(user_in: UserCreate, db: Session = Depends(get_db)):
    email = user_in.email.lower().strip()
    
    # Verify OTP if provided
    if user_in.otp:
        cached = otp_cache.get(email)
        if not cached:
            raise HTTPException(status_code=400, detail="No verification code found. Please click 'Send OTP' first.")
        if time.time() > cached["expires_at"]:
            raise HTTPException(status_code=400, detail="Verification code expired. Please request a new one.")
        if cached["otp"] != user_in.otp.strip():
            raise HTTPException(status_code=400, detail="Invalid verification code. Please check and try again.")
        # Clear OTP after successful verification
        otp_cache.pop(email, None)

    db_user = db.query(User).filter(User.email == email).first()
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="An account with this email address already exists"
        )
    
    hashed_password = get_password_hash(user_in.password)
    new_user = User(
        email=email,
        name=user_in.name,
        hashed_password=hashed_password
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    logger.info(f"Registered new user: {new_user.email} (ID: {new_user.id})")
    
    return {
        "access_token": f"token_{new_user.id}_{int(time.time())}",
        "token_type": "bearer",
        "user": new_user
    }

@router.post("/login", response_model=Token)
def login(user_in: UserLogin, db: Session = Depends(get_db)):
    email = user_in.email.lower().strip()
    db_user = db.query(User).filter(User.email == email).first()
    if not db_user or not verify_password(user_in.password, db_user.hashed_password):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password. Please verify your credentials."
        )
    
    return {
        "access_token": f"token_{db_user.id}_{int(time.time())}",
        "token_type": "bearer",
        "user": db_user
    }

@router.get("/users", response_model=List[UserResponse])
def get_all_users(db: Session = Depends(get_db)):
    """Convenient endpoint to view registered users in database."""
    return db.query(User).all()
