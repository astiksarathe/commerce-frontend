import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
  query: null,
  isLoading: false,
  error: {},
};

export const postQuery = createAsyncThunk("Query", async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(`/query`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const querySlice = createSlice({
  name: "Query",
  initialState,
  reducers: {
    clearState: (state) => {
      state.query = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postQuery.pending, (state) => {
      state.isLoading = false;
      state.query = null;
    });
    builder.addCase(postQuery.rejected, (state, action) => {
      state.isLoading = false;
      state.query = null;
      state.error = action.payload;
    });
    builder.addCase(postQuery.fulfilled, (state, action) => {
      state.isLoading = false;
      const { data } = action.payload;
      state.query = data;
    });
  },
});
export const { clearState } = querySlice.actions;
export default querySlice.reducer;
