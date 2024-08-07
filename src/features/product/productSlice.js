import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAPI, getProductByUrlAPI } from "./productAPI";
const initialState = {
  productDetails: {},
  productList: [],
  isLoading: false,
  error: null,
  quickViewProduct: {},
  isQuickViewModelOpen: false,
};

export const getProductByURL = createAsyncThunk("product", async (data, { rejectWithValue }) => {
  try {
    const response = await getProductByUrlAPI(data);
    return response.data; // Assuming response contains data key for successful request
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message from API response
  }
});

export const getProduct = createAsyncThunk("productId", async (data, { rejectWithValue }) => {
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
    // Extra reducers for getProductByURL
    builder.addCase(getProductByURL.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByURL.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload || {};
    });
    builder.addCase(getProductByURL.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Extra reducers for getProduct
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload || [];
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { productQuickView, quickViewModelHandler } = productSlice.actions;

export default productSlice.reducer;
