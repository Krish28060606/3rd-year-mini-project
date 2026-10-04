"""
Centralized Facial Landmarks & Ergonomics Constants.
MediaPipe 468/478 Landmark Indices for Eyewear Ergonomics Reference.
"""

LANDMARKS = {
    "TEMPLE_LEFT": 127,
    "TEMPLE_RIGHT": 356,
    "ZYGOMATIC_LEFT": 234,      # Leftmost facial cheek/width anchor
    "ZYGOMATIC_RIGHT": 454,     # Rightmost facial cheek/width anchor
    "FOREHEAD_TOP": 10,
    "CHIN_BOTTOM": 152,
    "PUPIL_LEFT": 468,         # Left iris center
    "PUPIL_RIGHT": 473,        # Right iris center
    "EYE_INNER_LEFT": 133,
    "EYE_OUTER_LEFT": 33,
    "EYE_INNER_RIGHT": 362,
    "EYE_OUTER_RIGHT": 263,
    "NOSE_SELLION": 168,        # Deepest depression at nose bridge
    "NOSE_PRONASALE": 1,        # Nose tip
    "NOSE_SUBNASALE": 2,        # Base of nose
    "ALARE_LEFT": 102,          # Left nostril wing
    "ALARE_RIGHT": 331,         # Right nostril wing
    "EAR_TRAGION_LEFT": 234,
    "EAR_TRAGION_RIGHT": 454
}

NOMINAL_ADULT_RANGES_MM = {
    "face_width": (125.0, 160.0),
    "face_height": (160.0, 210.0),
    "pupillary_distance": (54.0, 74.0),
    "bridge_width": (14.0, 24.0)
}

OCCASIONS = [
    "Office",
    "College",
    "Daily",
    "Party",
    "Sports",
    "Travel"
]
