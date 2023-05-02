import axios from "axios";
import { GET_DOGS, GET_DETAIL } from "./types";

export const getDogs = () => {
  return async function (dispatch) {
    const dogsData = await axios.get("http://localhost:3001/dogs");
    const dogs = dogsData.data;

    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const detailData = await axios.get(`http://localhost:3001/dogs/${id}`);
    const detail = detailData.data;
    dispatch({ type: GET_DETAIL, payload: detail });
  };
};
