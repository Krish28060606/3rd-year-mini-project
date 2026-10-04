from fastapi import APIRouter, HTTPException
from app.schemas.common import ApiResponse
from app.schemas.fitting import FitAnalysisRequest, CompleteFittingReport
from app.services.catalog_service import catalog_service
from app.services.fitting_service import fitting_service

router = APIRouter()

@router.post("/calculate-fit", response_model=ApiResponse[CompleteFittingReport])
def calculate_fit(request: FitAnalysisRequest):
    frame = catalog_service.get_frame_by_id(request.frameId)
    if not frame:
        raise HTTPException(status_code=404, detail=f"Frame '{request.frameId}' not found")
    report = fitting_service.calculate_fit(request.measurements, frame)
    return ApiResponse(
        success=True,
        message="Fitting compatibility computed successfully",
        data=report
    )
