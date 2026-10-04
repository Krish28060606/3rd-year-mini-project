import os
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "OptiFit 3D - Facial Mesh Fitting and Eyewear Ergonomics Engine"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000"
    ]
    DATA_PATH: str = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../data"))
    
    # Tolerances & Weight configuration for fitting algorithms
    FIT_SCORE_WEIGHTS: dict = {
        "width_ratio": 0.40,
        "bridge_fit": 0.25,
        "eye_alignment": 0.20,
        "temple_proportionality": 0.15
    }
    
    COMFORT_SCORE_WEIGHTS: dict = {
        "weight_penalty": 0.25,
        "bridge_pressure": 0.35,
        "temple_grip": 0.25,
        "slipping_risk": 0.15
    }

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
        extra="allow"
    )

settings = Settings()
