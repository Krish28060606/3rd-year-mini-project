import pytest
from app.utils.geometry import euclidean_distance_3d, estimate_scale_factor

def test_euclidean_distance():
    p1 = (0.0, 0.0, 0.0)
    p2 = (3.0, 4.0, 0.0)
    assert euclidean_distance_3d(p1, p2) == 5.0

def test_scale_factor():
    scale = estimate_scale_factor(measured_pd_pixels=100.0, standard_pd_mm=63.0)
    assert scale == 0.63
