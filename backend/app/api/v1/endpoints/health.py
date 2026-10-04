from fastapi import APIRouter
from app.schemas.common import ApiResponse
from app.core.config import settings

router = APIRouter()

@router.get("/health", response_model=ApiResponse[dict])
def health_check():
    return ApiResponse(
        success=True,
        message="OptiFit 3D Engine is operational",
        data={
            "status": "healthy",
            "version": settings.VERSION,
            "environment": settings.ENVIRONMENT
        }
    )
