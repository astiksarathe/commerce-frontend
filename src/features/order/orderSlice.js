import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
  createOrder: {},
  orderDetails: null,
  isLoading: false,
  error: null,
};
const baseURL = "order";

export const createOrder = createAsyncThunk(
  "order",
  async (data, { rejectWithValue }) => {
    try {
      console.log({ data });
      const response = await axiosInstance.post(
        `${baseURL}/create-order`,
        data
      );
      return response.data; // Assuming response contains data key for successful request
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from API response
    }
  }
);
//localhost:8000/api/v1/order/orderId/6693e648bdfa477ce75f5c21
export const getOrderById = createAsyncThunk(
  "orderById",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${baseURL}/orderId/${data}`,
        data
      );
      return response.data; // Assuming response contains data key for successful request
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from API response
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    removeError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Extra reducers for createOrder
    builder.addCase(createOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.createOrder = action.payload;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(getOrderById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) state.orderDetails = action.payload.data;
    });
    builder.addCase(getOrderById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const {
  checkoutModelHandler,
  updateShippingMethod,
  checkoutFormHandler,
  buyNowButtonHandler,
  addShippingDetails,
  addPersonalDetails,
} = orderSlice.actions;

export default orderSlice.reducer;
