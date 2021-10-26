import axios from "axios";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "./consts";

export const getItems = () => (dispatch) => {
  dispatch(itemsLoading());
  axios
    .get("/api/items")
    .then((res) => dispatch({ type: GET_ITEMS, payload: res.data }));
};

export const addItems = (payload) => (dispatch) => {
  axios.post("/api/items", payload).then((res) => {
    console.log(res);
    dispatch({ type: ADD_ITEMS, payload: res.data });
  });
};

export const deleteItem = (payload) => (dispatch) => {
  axios
    .delete(`api/items/${payload}`)
    .then((res) => dispatch({ type: DELETE_ITEMS, payload }));
};

export const itemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};