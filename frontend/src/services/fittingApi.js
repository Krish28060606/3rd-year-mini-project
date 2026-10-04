import { apiClient } from './apiClient';

export const fittingApi = {
  calculateFit: (measurements, frameId) => {
    return apiClient.post('/fitting/calculate-fit', {
      measurements,
      frameId,
    });
  },
  getRecommendations: (occasion) => {
    return apiClient.get('/recommendations/', { params: { occasion } });
  },
};
