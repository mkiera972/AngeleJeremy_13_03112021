import {
    GETPROFIL,
    GETPROFIL_FAIL,
    UPDATEPROFIL,
    UPDATEPROFIL_FAIL,
    SET_MESSAGE,
  } from "./types";
  
import userService from "../services/user.service";
  
export const getUserProfil = () => (dispatch) => {
    return userService.getUserProfil().then(
      (data) => {
        dispatch({
          type: GETPROFIL,
          payload: { data : data.data.body },
        });
  
        return Promise.resolve();
      },
      (error) => {
        
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: GETPROFIL_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

export const updateUserProfil = (firstName, lastName) => (dispatch) => {
  return userService.updateUserProfil(firstName,lastName).then(
    (data) => {
      console.log(data)
      dispatch({
        type: UPDATEPROFIL,
        payload: { data : data.data.body },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: data.data.message,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: UPDATEPROFIL_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};