import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: false,
};

export const sideMenuBarSlice = createSlice({
  name: "sideMenuBar",
  initialState,
  reducers: {
    openSideMenuBar: (state) => {
      state.isSideBarOpen = true;
    },
    closeSideMenuBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { openSideMenuBar, closeSideMenuBar } = sideMenuBarSlice.actions;

export default sideMenuBarSlice.reducer;
