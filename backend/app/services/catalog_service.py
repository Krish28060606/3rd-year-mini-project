import os
import json
from typing import List, Optional
from app.schemas.frame import FrameBase, FrameFilterParams
from app.core.config import settings
from app.utils.logger import logger

class CatalogService:
    def __init__(self):
        self._frames_cache: List[FrameBase] = []
        self._load_frames()

    def _load_frames(self):
        frames_file = os.path.join(settings.DATA_PATH, "frames.json")
        try:
            if os.path.exists(frames_file):
                with open(frames_file, "r", encoding="utf-8") as f:
                    raw_data = json.load(f)
                    self._frames_cache = [FrameBase(**item) for item in raw_data]
                    logger.info(f"Loaded {len(self._frames_cache)} frames from database.")
            else:
                logger.warning(f"Frames file not found at {frames_file}.")
                self._frames_cache = []
        except Exception as e:
            logger.error(f"Failed to load frames catalog: {e}")
            self._frames_cache = []

    def get_all_frames(self, filters: Optional[FrameFilterParams] = None) -> List[FrameBase]:
        if not filters:
            return self._frames_cache
        
        results = self._frames_cache
        if filters.shape:
            results = [f for f in results if f.frameShape.lower() == filters.shape.lower()]
        if filters.occasion:
            results = [f for f in results if filters.occasion in f.suitableOccasions]
        if filters.material:
            results = [f for f in results if filters.material.lower() in f.material.lower()]
        if filters.maxWeight:
            results = [f for f in results if f.weight <= filters.maxWeight]
        return results

    def get_frame_by_id(self, frame_id: str) -> Optional[FrameBase]:
        for frame in self._frames_cache:
            if frame.id == frame_id:
                return frame
        return None

catalog_service = CatalogService()
