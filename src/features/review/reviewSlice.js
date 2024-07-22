import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPostReviewModelOpen: false,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    postReviewModelHandler: (state, actions) => {
      state.isPostReviewModelOpen = actions.payload;
    },
  },
});

export const { postReviewModelHandler } = reviewSlice.actions;

export default reviewSlice.reducer;
