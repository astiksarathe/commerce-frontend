import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
  createOrder: {},
  orderDetails: null,
  preOrder: null,
  isLoading: false,
  error: null,
};
const baseURL = "order";

export const initiateOrder = createAsyncThunk(
  "initiateOrder",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`pre-order/initiate-order`, {
        products: data,
      });
      return response.data; // Assuming response contains data key for successful request
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from API response
    }
  }
);

export const createOrder = createAsyncThunk(
  "order",
  async (data, { rejectWithValue }) => {
    try {
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
export const updateInitiatedOrder = createAsyncThunk(
  "updateInitiatedOrder",
  async (data, { rejectWithValue }) => {
    const orderId = data.orderId;
    
    try {
      const response = await axiosInstance.put(
        `pre-order/update/orderId/${orderId}`,
        data
      );
      return response.data; // Assuming response contains data key for successful request
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from API response
    }
  }
);

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
    // Initiate Order
    builder.addCase(initiateOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(initiateOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      const { orderId } = action.payload.data;
      if (orderId) {
        state.preOrder = {
          orderId: orderId,
        };
        localStorage.setItem("orderId", orderId);
      }
    });
    builder.addCase(initiateOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // Initiate Order
    builder.addCase(updateInitiatedOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateInitiatedOrder.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateInitiatedOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Get Order By ID
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

export default orderSlice.reducer;
