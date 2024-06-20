import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAPI, getProductByUrlAPI } from "./productAPI";

const initialState = {
  productList: [],
  selectedProduct: {},
  selectedProductURL: "",
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
    selectedProductForDetail: (state, action) => {
      state.selectedProductURL = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.isLoading = false;
        if (action.meta.arg === state.selectedProductURL) {
          state.selectedProduct = action.payload[0] || {};
        } else if (action.type === "product/fulfilled") {
          state.productList = action.payload || [];
        }
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      }
    );
  },
});

export const { selectedProductForDetail, productQuickView, quickViewModelHandler } =
  productSlice.actions;

export default productSlice.reducer;
