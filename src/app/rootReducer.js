import { combineReducers } from "@reduxjs/toolkit";
import sideMenuBarReducer from "../features/sideMenuBar";

const rootReducer = combineReducers({
    sideMenuBar:sideMenuBarReducer
});

export default rootReducer;
