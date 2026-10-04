from fastapi import APIRouter, Query
from typing import List, Optional
from app.schemas.common import ApiResponse
from app.schemas.frame import FrameBase
from app.services.catalog_service import catalog_service

router = APIRouter()

@router.get("/", response_model=ApiResponse[List[FrameBase]])
def get_recommendations(
    occasion: Optional[str] = Query(None, description="Target occasion context")
):
    frames = catalog_service.get_all_frames()
    if occasion:
        frames = [f for f in frames if occasion in f.suitableOccasions]
    return ApiResponse(
        success=True,
        message=f"Generated recommendations ({len(frames)} matches)",
        data=frames
    )
