import axios from "axios";
import { GET_DOGS } from "./types";

export const getDogs = () => {
  return async function (dispatch) {
    const dogsData = await axios.get("http://localhost:3001/dogs");
    const dogs = dogsData.data;

    dispatch({ type: GET_DOGS, payload: dogs });
  };
};
