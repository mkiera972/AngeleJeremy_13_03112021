import { SET_SUCCESS_MESSAGE, CLEAR_SUCCESS_MESSAGE, SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from "./types";

export const setSuccessMessage = (message) => ({
  type: SET_SUCCESS_MESSAGE,
  payload: message,
});

export const clearSuccessMessage = () => ({
  type: CLEAR_SUCCESS_MESSAGE,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  payload: message,
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});