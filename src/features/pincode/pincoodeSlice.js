import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
  pincodeDetails: null,
  isLoading: false,
  error: {},
};

export const getPinCodeDetails = createAsyncThunk(
  "pincode",
  async (pincode, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/pincode/${pincode}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const pincodeSlice = createSlice({
  name: "pincode",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPinCodeDetails.pending, (state) => {
      state.isLoading = false;
      state.pincodeDetails = null;
    });
    builder.addCase(getPinCodeDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.pincodeDetails = null;
      state.error = action.payload;
    });
    builder.addCase(getPinCodeDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      const { data } = action.payload;
      state.pincodeDetails = data;
    });
  },
});

export default pincodeSlice.reducer;
