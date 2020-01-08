import axios from 'axios';

export const cfg = {
  apiUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:5000',
};

export const axiosAPI = axios.create({
  baseURL: cfg.apiUrl,
});
