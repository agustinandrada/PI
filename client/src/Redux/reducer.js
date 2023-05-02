import { GET_DETAIL, GET_DOGS } from "./types";

const initialState = { dogs: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DETAIL:
      return { ...state, dogs: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
