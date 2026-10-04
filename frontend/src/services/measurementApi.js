import { apiClient } from './apiClient';

export const measurementApi = {
  analyzeFrame: (formData) => {
    return apiClient.post('/measurement/analyze-frame', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  checkHealth: () => apiClient.get('/health'),
};
