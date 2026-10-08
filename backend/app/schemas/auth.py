from pydantic import BaseModel, EmailStr
from typing import Optional

class SendOTPRequest(BaseModel):
    email: EmailStr

class SendOTPResponse(BaseModel):
    message: str
    otp_preview: Optional[str] = None

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: Optional[str] = None
    otp: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    name: Optional[str] = None

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse
