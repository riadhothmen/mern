import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  } from "../actions/consts";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  };
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };
  
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
        };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
        };
      case LOGIN_FAIL:
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGOUT_SUCCESS:
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;