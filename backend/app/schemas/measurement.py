from typing import Dict, List, Optional
from pydantic import BaseModel, Field

class LandmarkPoint(BaseModel):
    x: float
    y: float
    z: float

class MeasurementItem(BaseModel):
    valueMm: float
    rangeMm: tuple[float, float]
    confidence: float
    isEstimated: bool = True
    label: str

class FacialAnalysisResult(BaseModel):
    faceWidth: MeasurementItem
    faceHeight: MeasurementItem
    pupillaryDistance: MeasurementItem
    bridgeWidth: MeasurementItem
    overallQuality: float
    isCalibrated: bool = False
    warningMessages: List[str] = []
    landmarksSummary: Dict[str, LandmarkPoint] = {}
