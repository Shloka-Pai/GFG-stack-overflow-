import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Example: attach token if needed
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default api;
