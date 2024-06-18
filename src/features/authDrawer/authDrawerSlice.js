import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthDrawerOpen: false,
};

export const authDrawerSlice = createSlice({
  name: "authDrawer",
  initialState,
  reducers: {
    openAuthDrawer: (state) => {
      state.isAuthDrawerOpen = true;
    },
    closedAuthDrawer: (state) => {
      state.isAuthDrawerOpen = false;
    },
  },
});

export const { openAuthDrawer, closedAuthDrawer } = authDrawerSlice.actions;

export default authDrawerSlice.reducer;
