// axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/", // Replace with your API base URL
  timeout: 5000, // Timeout in milliseconds (optional)
});

// Function to refresh access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken"); // Assuming refresh token is stored in localStorage
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    // Example: Call your API to refresh token
    const response = await axiosInstance.post("/refresh-token", { refreshToken });
    const { accessToken } = response.data;

    // Store the new access token in localStorage
    localStorage.setItem("accessToken", accessToken);

    return accessToken;
  } catch (error) {
    console.error("Refresh token error:", error);
    throw error; // Rethrow error to handle in calling component
  }
};

// Add a request interceptor to attach the access token to all requests
axiosInstance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("accessToken"); // Assuming access token is stored in localStorage
    // const refreshToken = localStorage.getItem('refreshToken'); // Assuming refresh token is stored in localStorage

    // // If no access token or it's expired, refresh the access token
    // if (!token) {
    //   token = await refreshAccessToken(); // Refresh the access token
    // }

    // Set the Authorization header with the access token
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
