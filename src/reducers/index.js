import { combineReducers } from "redux";
import { SideDrawerReducer } from "./SideDrawerReducer";
import { AuthReducer } from "./AuthReducer";

const allReducers = combineReducers({
  sideDrawerState: SideDrawerReducer,
  auth: AuthReducer
});

export default allReducers;
