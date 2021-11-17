import {
    GETPROFIL,
    UPDATEPROFIL,
  } from "../actions/types";
  
  const initialState = { 
    userProfil: {}
  };

  
  export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GETPROFIL:
        return {
          ...state,
          userProfil: payload.data,
        };
      case UPDATEPROFIL:
        return {
          ...state,
          userProfil: payload.data,
        };
      default:
        return state;
    }
  }