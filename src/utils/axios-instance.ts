import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

import axios, { AxiosHeaders } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

// Create an Axios instance
// Note: For frontend-only demo, this is configured but not actively used
// In production with backend, set VITE_API_URL environment variable
export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000,
});

// Request Interceptor
// Note: For frontend-only demo, token interceptor is disabled
// In production with backend, uncomment and configure properly
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Frontend-only demo: Token interceptor disabled
    // const authToken = Cookies.get("authToken");
    // if (authToken) {
    //   if (config.headers instanceof AxiosHeaders) {
    //     config.headers.set("Authorization", `Bearer ${authToken}`);
    //   }
    //   else {
    //     config.headers = new AxiosHeaders({
    //       ...config.headers,
    //       Authorization: `Bearer ${authToken}`,
    //     });
    //   }
    // }
    return config;
  },
  error => Promise.reject(error),
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login.");
      redirectToLogin();
    }
    return Promise.reject(error);
  },
);

export function redirectToLogin() {
  // Frontend-only demo: Simple redirect without token cleanup
  // In production with backend, this would clear auth tokens
  toast.error("Session expired. Please login to perform action.");
  window.location.href = "/login";
}

export function handleError(error: { response: { data: { error: { error: string } } } }, fallbackMessage: string) {
  const errorMessage = error?.response?.data?.error?.error || fallbackMessage;
  console.error(error);
  toast.error(errorMessage, {
    toastId: errorMessage,
  });
}
