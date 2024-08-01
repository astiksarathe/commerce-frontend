import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
  createOrder: {},
  isLoading: false,
  error: null,
};
const baseURL = "order";

export const createOrder = createAsyncThunk("order", async (data, { rejectWithValue }) => {
  try {
    console.log({ data });
    const response = await axiosInstance.post(`${baseURL}/create-order`, data);
    console.log({ response });
    return response.data; // Assuming response contains data key for successful request
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message from API response
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
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
