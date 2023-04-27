const axios = require("axios");
require("dotenv").config();
const { DB_APIKEY } = process.env;
const { Dog } = require("../db");

const getDogById = async (id, fuente) => {
  const dog = fuente;

  if (fuente === "api") {
    const dogs = (
      await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${DB_APIKEY}`
      )
    ).data;
    const filtrado = dogs.filter((doge) => doge.id == id);
    return filtrado;
  } else {
    const dogs = await Dog.findByPk(id);
    return dogs;
  }
};

module.exports = { getDogById };
