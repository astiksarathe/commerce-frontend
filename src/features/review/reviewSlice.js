import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { getQueryParamsFromObj } from "../../utils/common";

const initialState = {
  isPostReviewModelOpen: false,
  reviewList: [],
  metaData: {},
  isLoading: false,
  productId: "",
  error: {},
  reviewSubmitted: false,
};

export const getReviewsByProductId = createAsyncThunk(
  "reviewByProductId",
  async ({ productId, query }, { rejectWithValue }) => {
    try {
      console.log("PRODUCT ID INSIDE CALL", productId);
      const response = await axiosInstance.get(
        `/review/productId/${productId}?${getQueryParamsFromObj(query)}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postReview = createAsyncThunk("postReview", async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(`/review/post-review`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

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
    builder.addCase(postReview.fulfilled, (state) => {
      state.isLoading = false;
      state.reviewSubmitted = true;
      state.error = {};
    });
    builder.addCase(postReview.pending, (state) => {
      state.isLoading = true;
      state.reviewSubmitted = false;
      state.error = {};
    });
    builder.addCase(postReview.rejected, (state, action) => {
      state.isLoading = false;
      if (action?.payload?.error) state.error = action.payload.error;
      state.reviewSubmitted = false;
    });
  },
});

export const { postReviewModelHandler } = reviewSlice.actions;

export default reviewSlice.reducer;
