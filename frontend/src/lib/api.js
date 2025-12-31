import axios from 'axios';

// Dynamically determine API URL based on environment
const getApiUrl = () => {
  // Check if VITE_API_URL is set in environment variables
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // For production builds, try to use relative URL if no env var is set
  if (import.meta.env.PROD) {
    // In production, use relative URL if backend is on same domain
    return '/api';
  }
  
  // Default to localhost for development
  return 'http://localhost:5000/api';
};

// Create axios instance with base URL
const api = axios.create({
  baseURL: getApiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Log API URL in development for debugging
if (import.meta.env.DEV) {
  console.log('🌐 API Base URL:', api.defaults.baseURL);
}

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

export default api;

