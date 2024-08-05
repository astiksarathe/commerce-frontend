import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryInfoOpen: false,
  askQuestionOpen: false,
  askQuestionDrawer: {
    title: "",
  },
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    deliveryInfoOpenHandler: (state, action) => {
      state.deliveryInfoOpen = action.payload;
    },
    askQuestionOpenHandler: (state, action) => {
      const { open, title } = action.payload;
      state.askQuestionOpen = open;
      state.askQuestionDrawer.title = title;
      // if(action)
    },
  },
});

export const { deliveryInfoOpenHandler, askQuestionOpenHandler } = drawerSlice.actions;

export default drawerSlice.reducer;
