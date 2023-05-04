import axios from "axios";
import { GET_DOGS, GET_DETAIL, FILT_BDD, FILT_API, GET_NAME } from "./types";

//! GET ALL DOGS

//! GET DOGS

export const getDogs = (orden) => {
  if (!orden || orden === "normal") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      const final = dogs.sort((a, b) => a.name.localeCompare(b.name));

      dispatch({ type: GET_DOGS, payload: final });
    };
  }
  if (orden === "inverso") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      const final = dogs.sort((a, b) => b.name.localeCompare(a.name));

      dispatch({ type: GET_DOGS, payload: final });
    };
  }
  if (orden === "pesado") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return bWeight - aWeight;
      });
      dispatch({ type: "GET_DOGS", payload: final });
    };
  }
  if (orden === "liviano") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return aWeight - bWeight;
      });

      dispatch({ type: "GET_DOGS", payload: final });
    };
  }
};

//*----------------------------------------------------------------------------
//!GET DETAIL

export const getDetail = (id) => {
  return async function (dispatch) {
    const detailData = await axios.get(`http://localhost:3001/dogs/${id}`);
    const detail = detailData.data;
    dispatch({ type: GET_DETAIL, payload: detail });
  };
};

//*---------------------------------------------------------------------------
//!FILTRADO POR BASE DE DATOS

export const getFiltBdd = (orden) => {
  if (!orden || orden === "normal") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      const final = dogs
        .filter((dog) => typeof dog.id === "string")
        .sort((a, b) => a.name.localeCompare(b.name));
      dispatch({ type: FILT_BDD, payload: final });
    };
  }
  if (orden === "inverso") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      const final = dogs
        .filter((dog) => typeof dog.id === "string")
        .sort((a, b) => b.name.localeCompare(a.name));
      dispatch({ type: FILT_BDD, payload: final });
    };
  }
  if (orden === "liviano") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const datas = data.data;
      const dogs = datas.filter((dog) => typeof dog.id === "string");
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return aWeight - bWeight;
      });
      dispatch({ type: FILT_BDD, payload: final });
    };
  }
  if (orden === "pesado") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return bWeight - aWeight;
      });
      dispatch({ type: FILT_BDD, payload: final });
    };
  }
};

//*---------------------------------------------------------------------------------------
//!FILTRADO POR API

export const getFiltApi = (orden) => {
  if (!orden || orden === "normal") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      const final = await dogs
        .filter((dog) => typeof dog.id === "number")
        .sort((a, b) => a.name.localeCompare(b.name));
      dispatch({ type: FILT_API, payload: final });
    };
  }
  if (orden === "inverso") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      const final = await dogs
        .filter((dog) => typeof dog.id === "number")
        .sort((a, b) => b.name.localeCompare(a.name));
      dispatch({ type: FILT_API, payload: final });
    };
  }
  if (orden === "inverso") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const dogs = data.data;
      const final = dogs
        .filter((dog) => typeof dog.id === "string")
        .sort((a, b) => b.name.localeCompare(a.name));
      dispatch({ type: FILT_BDD, payload: final });
    };
  }
  if (orden === "liviano") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const datas = data.data;
      const dogs = datas.filter((dog) => typeof dog.id === "number");
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return aWeight - bWeight;
      });
      dispatch({ type: FILT_BDD, payload: final });
    };
  }
  if (orden === "pesado") {
    return async function (dispatch) {
      const data = await axios.get("http://localhost:3001/dogs");
      const datas = data.data;
      const dogs = datas.filter((dog) => typeof dog.id === "number");
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return bWeight - aWeight;
      });
      dispatch({ type: FILT_BDD, payload: final });
    };
  }
};

//*-------------------------------------------------------------------------------------------
//! BUSCAR NOMBRE

export const getName = (name) => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/dogs");
    const dogs = data.data;
    const final = await dogs.filter((dog) => dog.name.includes(name));
    dispatch({ type: GET_NAME, payload: final });
  };
};

//*----------------------------------------------------------------------------------------------'
//! PAGINADO
