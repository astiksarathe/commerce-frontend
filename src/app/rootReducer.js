import { combineReducers } from "@reduxjs/toolkit";

import sideMenuBarReducer from "../features/sideMenuBar";
import authDrawerReducer from "../features/authDrawer";
import authReducer from "../features/auth";
import cartReducer from "../features/cart";
import productReducer from "../features/product";
import pincodeReducer from "../features/pincode";
import checkoutReducer from "../features/checkout";
import reviewReducer from "../features/review";
import wishlistReducer from "../features/wishlist";
import modelDrawerReducer from "../features/model-drawer";
import shippingReducer from "../features/shipping";
import checkoutExitReducer from "../features/checkoutExit";
import orderConfirmModalReducer from "../features/orderConfirmModal";
import orderReducer from "../features/order";
import drawerReducer from "../features/drawer";

const rootReducer = combineReducers({
  authDrawer: authDrawerReducer,
  sideMenuBar: sideMenuBarReducer,
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  pincode: pincodeReducer,
  checkout: checkoutReducer,
  review: reviewReducer,
  wishlist: wishlistReducer,
  modelDrawer: modelDrawerReducer,
  shipping: shippingReducer,
  checkoutExit: checkoutExitReducer,
  orderConfirm: orderConfirmModalReducer,
  order: orderReducer,
  drawer: drawerReducer,
});

export default rootReducer;
