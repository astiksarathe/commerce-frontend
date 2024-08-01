import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: null,
  isEditMode: false,
  // onClick: () => {},
  // onCancel: () => {},
  title: null,
  isOpen: false,
  isLoading: false,
  error: null,
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    openShippingDrawer: (state) => {
      state.isOpen = true;
    },
    closeShippingDrawer: (state) => {
      state.isOpen = false;
    },
    setShippingEditMode: (state, actions) => {
      state.isEditMode = actions.payload.isEditMode;
    },
  },
});

export const { openShippingDrawer, closeShippingDrawer, setShippingEditMode } =
  shippingSlice.actions;

export default shippingSlice.reducer;
