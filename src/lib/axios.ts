// lib/axios.ts
"use client";

import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "", // 默认使用相对路径
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    // 可选加 token
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("[API ERROR]", error);
    return Promise.reject(error);
  }
);

export default api;
