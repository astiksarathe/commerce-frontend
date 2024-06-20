import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAPI } from "./productAPI";

const initialState = {
  productList: [],
  selectedProduct: {},
  isLoading: false,
  error: null,
  quickViewProduct: {},
  isQuickViewModelOpen: false,
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
  reducers: {
    productQuickView: (state, action) => {
      state.quickViewProduct = action.payload;
    },
    quickViewModelHandler: (state, action) => {
      state.isQuickViewModelOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.productList = action.payload || [];
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { productQuickView, quickViewModelHandler } = productSlice.actions;

export default productSlice.reducer;
