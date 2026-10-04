from dataclasses import dataclass
from typing import List, Optional

@dataclass
class EyewearFrame:
    id: str
    name: str
    modelPath: str
    frameWidth: float
    bridgeWidth: float
    lensWidth: float
    lensHeight: float
    templeLength: float
    weight: float
    material: str
    frameShape: str
    frameStyle: str
    frameColor: str
    suitableOccasions: List[str]
    genderNeutral: bool
    lensTypes: List[str]
    description: str
