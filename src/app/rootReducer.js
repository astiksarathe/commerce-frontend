import { combineReducers } from "@reduxjs/toolkit";

import sideMenuBarReducer from "../features/sideMenuBar";
import authDrawerReducer from "../features/authDrawer";
import authReducer from "../features/auth";
import cartReducer from "../features/cart";

const rootReducer = combineReducers({
  authDrawer: authDrawerReducer,
  sideMenuBar: sideMenuBarReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
