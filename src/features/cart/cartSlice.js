import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  isLoading: false,
  error: null,
  isCartDrawerOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartDrawerHandler: (state, action) => {
      state.isCartDrawerOpen = action.payload || false;
    },
    // Additional reducers can be defined here if needed
  },
});

export const { cartDrawerHandler } = cartSlice.actions;

export default cartSlice.reducer;
