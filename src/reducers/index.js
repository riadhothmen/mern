import { combineReducers } from "redux";
import ItemReducer from "./itemReducer.js";

const combinedReducers = combineReducers({ item: ItemReducer });

export default combinedReducers;