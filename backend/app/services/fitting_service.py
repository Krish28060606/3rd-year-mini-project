"""
Dedicated Eyewear Fit and Comfort Estimation Engine Interface.
Detailed scoring algorithms will be implemented in Phase 7.
"""
from app.schemas.fitting import CompleteFittingReport, FitScoreBreakdown, ComfortAnalysis
from app.schemas.measurement import FacialAnalysisResult
from app.schemas.frame import FrameBase
from app.core.config import settings

class FittingService:
    def calculate_fit(self, measurements: FacialAnalysisResult, frame: FrameBase) -> CompleteFittingReport:
        face_width = measurements.faceWidth.valueMm
        frame_width = frame.frameWidth
        
        # Transparent width compatibility ratio
        width_diff = abs(face_width - frame_width)
        if width_diff <= 3.0:
            width_score = 98.0
            width_status = "Optimal"
        elif width_diff <= 7.0:
            width_score = 85.0
            width_status = "Good"
        elif frame_width > face_width:
            width_score = 65.0
            width_status = "Oversized"
        else:
            width_score = 60.0
            width_status = "Undersized"

        bridge_diff = abs(measurements.bridgeWidth.valueMm - frame.bridgeWidth)
        bridge_score = max(50.0, 100.0 - (bridge_diff * 8.0))
        bridge_status = "Optimal" if bridge_diff < 2.0 else ("Narrow" if frame.bridgeWidth < measurements.bridgeWidth.valueMm else "Wide")

        eye_align_score = 90.0
        temple_fit_score = 88.0

        w = settings.FIT_SCORE_WEIGHTS
        overall_fit = (
            width_score * w["width_ratio"] +
            bridge_score * w["bridge_fit"] +
            eye_align_score * w["eye_alignment"] +
            temple_fit_score * w["temple_proportionality"]
        )

        comfort_score = max(50.0, overall_fit - (frame.weight * 0.4))
        pressure_risk = "Low" if bridge_score > 80 else ("Medium" if bridge_score > 60 else "High")
        slipping_risk = "Low" if width_diff < 5.0 else "Medium"

        return CompleteFittingReport(
            fitBreakdown=FitScoreBreakdown(
                widthCompatibilityScore=round(width_score, 1),
                bridgeCompatibilityScore=round(bridge_score, 1),
                eyeAlignmentScore=round(eye_align_score, 1),
                templeFitScore=round(temple_fit_score, 1),
                overallFitScore=round(overall_fit, 1),
                widthStatus=width_status,
                bridgeStatus=bridge_status,
                explanation=f"Frame width ({frame.frameWidth}mm) offers {width_status.lower()} lateral balance relative to estimated face width ({face_width}mm)."
            ),
            comfortAnalysis=ComfortAnalysis(
                comfortScore=round(comfort_score, 1),
                bridgePressureRisk=pressure_risk,
                slippingRisk=slipping_risk,
                alignmentRating="Good" if overall_fit >= 80 else "Fair",
                comfortSummary=f"Calculated comfort score of {round(comfort_score, 1)}% based on {frame.weight}g frame mass and {pressure_risk.lower()} bridge pressure risk."
            ),
            frame=frame
        )

fitting_service = FittingService()
