import { combineReducers } from "redux";
import ItemReducer from "./itemReducer.js";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

const combinedReducers = combineReducers({
  item: ItemReducer,
  error: errorReducer,
  auth: authReducer,
});

export default combinedReducers;