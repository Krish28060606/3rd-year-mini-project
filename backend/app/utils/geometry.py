import math
import numpy as np
from typing import Tuple, Dict

def euclidean_distance_3d(p1: Tuple[float, float, float], p2: Tuple[float, float, float]) -> float:
    """Calculate Euclidean distance between two 3D points."""
    return float(np.linalg.norm(np.array(p1) - np.array(p2)))

def calculate_angle_3d(v1: Tuple[float, float, float], v2: Tuple[float, float, float]) -> float:
    """Calculate angle between two 3D vectors in degrees."""
    unit_v1 = v1 / np.linalg.norm(v1)
    unit_v2 = v2 / np.linalg.norm(v2)
    dot_product = np.clip(np.dot(unit_v1, unit_v2), -1.0, 1.0)
    return float(np.degrees(np.arccos(dot_product)))

def estimate_scale_factor(measured_pd_pixels: float, standard_pd_mm: float = 63.0) -> float:
    """Estimate pixels-to-millimeters scale conversion ratio based on standard PD baseline."""
    if measured_pd_pixels <= 0:
        return 1.0
    return standard_pd_mm / measured_pd_pixels
