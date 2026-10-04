import random
import time
import bcrypt
from typing import List, Dict
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
    logger.info(f"Generated verification OTP for {email}: {otp_code}")
    print(f"\n[OPTIFIT AUTH] >>> Email OTP for {email}: {otp_code} <<<\n")
    return {
        "message": f"Verification code sent to {email}",
        "otp_preview": otp_code
    }

@router.post("/signup", response_model=Token)
def signup(user_in: UserCreate, db: Session = Depends(get_db)):
    email = user_in.email.lower().strip()
    
    # Verify OTP if sent
    if user_in.otp:
        cached = otp_cache.get(email)
        if not cached:
            raise HTTPException(status_code=400, detail="No verification code found. Please click 'Send OTP' first.")
        if time.time() > cached["expires_at"]:
            raise HTTPException(status_code=400, detail="Verification code expired. Please request a new one.")
        if cached["otp"] != user_in.otp.strip():
            raise HTTPException(status_code=400, detail="Invalid verification code. Please check and try again.")
        # Clear OTP after successful check
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
