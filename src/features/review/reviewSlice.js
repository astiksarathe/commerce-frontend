import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { getQueryParamsFromObj } from "../../utils/common";

const initialState = {
  isPostReviewModelOpen: false,
  reviewList: [],
  metaData: {},
  isLoading: false,
  productId: "",
};

export const getReviewsByProductId = createAsyncThunk(
  "reviewByProductId",
  async ({ productId, query }, { rejectWithValue }) => {
    try {
      console.log("INSIDE REVIEW SLICE", { productId, query });
      const response = await axiosInstance.get(
        `/review/productId/${productId}?${getQueryParamsFromObj(query)}`
      );
      console.log("INSIDE REVIEW SLICE", { response });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    postReviewModelHandler: (state, actions) => {
      state.isPostReviewModelOpen = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReviewsByProductId.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action?.payload?.data) {
        state.metaData = {};
        state.reviewList = action.payload.data;
      }
    });
    builder.addCase(getReviewsByProductId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviewsByProductId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { postReviewModelHandler } = reviewSlice.actions;

export default reviewSlice.reducer;
