import { combineReducers } from "@reduxjs/toolkit";

import sideMenuBarReducer from "../features/sideMenuBar";
import authDrawerReducer from "../features/authDrawer";
import authReducer from "../features/auth";
import cartReducer from "../features/cart";
import productReducer from "../features/product";
import pincodeReducer from "../features/pincode";
import checkoutReducer from "../features/checkout";
import reviewReducer from "../features/review";

const rootReducer = combineReducers({
  authDrawer: authDrawerReducer,
  sideMenuBar: sideMenuBarReducer,
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  pincode: pincodeReducer,
  checkout: checkoutReducer,
  review: reviewReducer,
});

export default rootReducer;
