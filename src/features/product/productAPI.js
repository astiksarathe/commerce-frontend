// utils/authAPI.js

import axiosInstance from "../../utils/axiosInstance";

const baseURL = "/product"; // Adjust base URL as per your API

export const getProductsAPI = async (data) => {
  try {
    const response = await axiosInstance.get(`${baseURL}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};