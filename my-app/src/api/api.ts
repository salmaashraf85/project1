import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add interceptors for auth, errors, etc.
apiClient.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.response?.data || error.message)
);

export default apiClient;