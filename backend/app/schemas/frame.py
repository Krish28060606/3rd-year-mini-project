from typing import List, Optional
from pydantic import BaseModel, Field

class FrameBase(BaseModel):
    id: str
    name: str
    modelPath: str
    frameWidth: float = Field(..., description="Total frame width in mm")
    bridgeWidth: float = Field(..., description="Bridge distance in mm")
    lensWidth: float = Field(..., description="Lens horizontal width in mm")
    lensHeight: float = Field(..., description="Lens vertical height in mm")
    templeLength: float = Field(..., description="Temple arm length in mm")
    weight: float = Field(..., description="Weight in grams")
    material: str
    frameShape: str
    frameStyle: str
    frameColor: str
    suitableOccasions: List[str]
    genderNeutral: bool = True
    lensTypes: List[str]
    description: str

class FrameFilterParams(BaseModel):
    shape: Optional[str] = None
    occasion: Optional[str] = None
    material: Optional[str] = None
    maxWeight: Optional[float] = None
