import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOrderConfirmModalOpen: false,
  isLoading: false,
  error: null,
};

const orderConfirmModalSlice = createSlice({
  name: "orderConfirmModal",
  initialState,
  reducers: {
    orderConfirmModalHandler: (state, action) => {
      state.isOrderConfirmModalOpen = action.payload;
    },
  },
});

export const { orderConfirmModalHandler } = orderConfirmModalSlice.actions;

export default orderConfirmModalSlice.reducer;
