// src/services/api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://your-api-url.com'
    // other configurations
});

export default instance;
