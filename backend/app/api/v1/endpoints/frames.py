from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from app.schemas.common import ApiResponse
from app.schemas.frame import FrameBase, FrameFilterParams
from app.services.catalog_service import catalog_service

router = APIRouter()

@router.get("/", response_model=ApiResponse[List[FrameBase]])
def list_frames(
    shape: Optional[str] = Query(None, description="Filter by frame shape"),
    occasion: Optional[str] = Query(None, description="Filter by occasion"),
    material: Optional[str] = Query(None, description="Filter by material"),
    max_weight: Optional[float] = Query(None, description="Filter by maximum weight in grams")
):
    filters = FrameFilterParams(shape=shape, occasion=occasion, material=material, maxWeight=max_weight)
    frames = catalog_service.get_all_frames(filters)
    return ApiResponse(
        success=True,
        message=f"Retrieved {len(frames)} frames",
        data=frames
    )

@router.get("/{frame_id}", response_model=ApiResponse[FrameBase])
def get_frame(frame_id: str):
    frame = catalog_service.get_frame_by_id(frame_id)
    if not frame:
        raise HTTPException(status_code=404, detail=f"Frame with ID '{frame_id}' not found")
    return ApiResponse(
        success=True,
        message="Frame retrieved successfully",
        data=frame
    )
