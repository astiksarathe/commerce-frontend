import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryInfoOpen: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    deliveryInfoOpenHandler: (state, action) => {
      state.deliveryInfoOpen = action.payload;
    },
  },
});

export const { deliveryInfoOpenHandler } = drawerSlice.actions;

export default drawerSlice.reducer;
