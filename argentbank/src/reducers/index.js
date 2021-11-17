import { combineReducers } from "redux";
import auth from "./auth";
import userReducer from "./user";
import message from "./message";

export default combineReducers({
  auth,
  userReducer,
  message,
});