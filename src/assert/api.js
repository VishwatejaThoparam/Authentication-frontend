import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8080', // Example base URL
  baseURL: 'https://authentication-backend-production-e7a4.up.railway.app',
  timeout: 5000, // Example timeout configuration
});

export default axiosInstance;
