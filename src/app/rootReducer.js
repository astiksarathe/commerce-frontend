import { combineReducers } from "@reduxjs/toolkit";
import sideMenuBarReducer from "../features/sideMenuBar";
import authDrawerReducer from "../features/authDrawer";

const rootReducer = combineReducers({
    authDrawer: authDrawerReducer,
    sideMenuBar:sideMenuBarReducer
});

export default rootReducer;
