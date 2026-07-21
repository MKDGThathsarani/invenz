// src/services/api.js - DEMO MODE
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Handle errors (DEMO MODE)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // ✅ DEMO MODE: Don't redirect on errors
    console.warn('API Error:', error.message);
    
    if (error.response?.status === 401) {
      // ✅ Don't redirect in demo mode
      // localStorage.removeItem('token');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;