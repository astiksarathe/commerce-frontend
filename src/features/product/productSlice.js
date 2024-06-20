import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAPI } from "./productAPI";

const initialState = {
  productList: [],
  selectedProduct: {},
  isLoading: false,
  error: null,
};

export const getProduct = createAsyncThunk("product", async (data, { rejectWithValue }) => {
  try {
    const response = await getProductsAPI(data);
    return response.data; // Assuming response contains data key for successful request
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message from API response
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        console.log(action);
        state.status = "succeeded";
        state.user = action.payload;
        state.isLoading = false;
        state.productList = [];
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
