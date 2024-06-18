import { combineReducers } from "@reduxjs/toolkit";
import sideMenuBarReducer from "../features/sideMenuBar";
import authDrawerReducer from "../features/authDrawer";
import authReducer from "../features/auth";

const rootReducer = combineReducers({
  authDrawer: authDrawerReducer,
  sideMenuBar: sideMenuBarReducer,
  auth: authReducer,
});

export default rootReducer;
