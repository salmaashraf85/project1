import apiClient from '../api/api';

class ApiService {
  async get(endpoint: string, params?: object) {
    return apiClient.get(endpoint, { params });
  }

  async post(endpoint: string, data: object) {
    return apiClient.post(endpoint, data);
  }

  // Add put, delete, etc.
}

export const apiService = new ApiService();