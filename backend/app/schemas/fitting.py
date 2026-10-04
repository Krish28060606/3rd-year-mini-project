from typing import List, Optional
from pydantic import BaseModel, Field
from app.schemas.measurement import FacialAnalysisResult
from app.schemas.frame import FrameBase

class FitAnalysisRequest(BaseModel):
    measurements: FacialAnalysisResult
    frameId: str

class FitScoreBreakdown(BaseModel):
    widthCompatibilityScore: float
    bridgeCompatibilityScore: float
    eyeAlignmentScore: float
    templeFitScore: float
    overallFitScore: float
    widthStatus: str  # "Undersized", "Optimal", "Oversized"
    bridgeStatus: str # "Narrow", "Optimal", "Wide"
    explanation: str

class ComfortAnalysis(BaseModel):
    comfortScore: float
    bridgePressureRisk: str  # "Low", "Medium", "High"
    slippingRisk: str        # "Low", "Medium", "High"
    alignmentRating: str     # "Good", "Fair", "Poor"
    comfortSummary: str

class CompleteFittingReport(BaseModel):
    fitBreakdown: FitScoreBreakdown
    comfortAnalysis: ComfortAnalysis
    frame: FrameBase
    disclaimer: str = "Estimated software-based ergonomic approximation. Non-medical reference only."
