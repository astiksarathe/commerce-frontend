// utils/authAPI.js

import axiosInstance from "../../utils/axiosInstance";

const baseURL = "/users"; // Adjust base URL as per your API

export const loginApi = async (data) => {
  try {
    const response = await axiosInstance.post(`${baseURL}/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerApi = async (data) => {
  try {
    const response = await axiosInstance.post(`${baseURL}/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutApi = async () => {
  try {
    const response = await axiosInstance.post(`${baseURL}/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshTokenApi = async (data) => {
  try {
    const response = await axiosInstance.post(`${baseURL}/refresh-token`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePasswordApi = async (data) => {
  try {
    const response = await axiosInstance.post(`${baseURL}/change-password`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUserApi = async () => {
  try {
    const response = await axiosInstance.get(`${baseURL}/current-user`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAccountApi = async (data) => {
  try {
    const response = await axiosInstance.patch(`${baseURL}/update-account`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
