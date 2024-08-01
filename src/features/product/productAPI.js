import axiosInstance from "../../utils/axiosInstance";

const baseURL = "/product"; // Adjust base URL as per your API

export const getProductsAPI = async (data) => {
  try {
    const response = await axiosInstance.get(`${baseURL}/getAllProducts`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductByUrlAPI = async (data) => {
  try {
    const response = await axiosInstance.get(`${baseURL}/getByURL/${data}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
