import { GET_ERRORS, CLEAR_ERRORS } from "../actions/consts";

const intialState = {
  message: {},
  status: null,
  id: null,
};

const errorReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default errorReducer;