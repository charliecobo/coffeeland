import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
});
