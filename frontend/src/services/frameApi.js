import { apiClient } from './apiClient';

export const frameApi = {
  getAllFrames: (params = {}) => apiClient.get('/frames/', { params }),
  getFrameById: (id) => apiClient.get(`/frames/${id}`),
};
