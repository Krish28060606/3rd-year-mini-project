from fastapi import APIRouter
from app.api.v1.endpoints import health, frames, measurement, fitting, recommendations, auth

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(health.router, tags=["System Health"])
api_router.include_router(frames.router, prefix="/frames", tags=["Eyewear Catalog"])
api_router.include_router(measurement.router, prefix="/measurement", tags=["Facial Analysis Engine"])
api_router.include_router(fitting.router, prefix="/fitting", tags=["Fit & Comfort Engine"])
api_router.include_router(recommendations.router, prefix="/recommendations", tags=["Recommendation Engine"])
