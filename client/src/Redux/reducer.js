import { FILT_BDD, FILT_API, GET_DETAIL, GET_DOGS, GET_NAME } from "./types";

const initialState = { dogs: [], filt: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DETAIL:
      return { ...state, dogs: action.payload };
    case FILT_BDD:
      return { ...state, dogs: action.payload };
    case FILT_API:
      return { ...state, dogs: action.payload };
    case GET_NAME:
      return { ...state, dogs: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
