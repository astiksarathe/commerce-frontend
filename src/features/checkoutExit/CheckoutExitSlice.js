import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExitDrawerOpen: false,
  isLoading: false,
  error: null,
};

const checkoutExit = createSlice({
  name: "checkoutExit",
  initialState,
  reducers: {
    exitDrawerHandler: (state, action) => {
      state.isExitDrawerOpen = action.payload;
    },
  },
});

export const { exitDrawerHandler } = checkoutExit.actions;

export default checkoutExit.reducer;
