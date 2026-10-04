from fastapi import APIRouter, UploadFile, File
from app.schemas.common import ApiResponse
from app.schemas.measurement import FacialAnalysisResult
from app.services.cv_service import cv_service

router = APIRouter()

@router.post("/analyze-frame", response_model=ApiResponse[FacialAnalysisResult])
async def analyze_frame(file: UploadFile = File(...)):
    contents = await file.read()
    result = cv_service.process_frame(contents)
    return ApiResponse(
        success=True,
        message="Facial biometric geometry analyzed successfully (Estimated)",
        data=result
    )
