import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8080/api', // Example base URL
    baseURL: 'http://authentication-backend-production-985f.up.railway.app',
//   timeout: 5000, // Example timeout configuration
});

export default axiosInstance;
