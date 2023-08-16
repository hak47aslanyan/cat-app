import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from "./cat.ActionTypes";

export const CAT_KEY = "catStore";

let initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};

export const catReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOAD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LOAD_DATA_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
