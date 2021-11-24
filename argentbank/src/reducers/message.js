import { SET_SUCCESS_MESSAGE, CLEAR_SUCCESS_MESSAGE, SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from "../actions/types";

const initialState = {
  message: "",
  statusMessage : ""
};

export default function message(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        message: payload,
        statusMessage : "success"
      };

    case CLEAR_SUCCESS_MESSAGE:
      return { message: "" };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        message: payload,
        statusMessage : "warning"
      };

    case CLEAR_ERROR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}