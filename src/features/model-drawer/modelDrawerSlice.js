import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelDetails: {},
  modelType: 1, // 1 for model 2 for drawer
  isModelDrawerOpen: false,
  isLoading: false,
  error: {},
};

const modelDrawerSlice = createSlice({
  name: "modeldrawer",
  initialState,
  reducers: {
    openResponsiveModel: (state, action) => {
      state.isModelDrawerOpen = true;
      state.modelDetails = {
        footer: action.payload.footer,
        title: action.payload.title,
        body: action.payload.body,
        cancelFn: action.payload.cancelFn,
      };
    },
    closeResponsiveModel: (state, action) => {
      state.isModelDrawerOpen = false;
      state.modelDetails = {};
    },
  },
});

export const { openResponsiveModel, closeResponsiveModel } = modelDrawerSlice.actions;

export default modelDrawerSlice.reducer;
