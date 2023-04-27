const { posTemp, getTemp } = require("../Controllers/temperaments.control");
const { Temperament } = require("../db");

const getTemperaments = async (req, res) => {
  try {
    const temps = await posTemp();
    res.status(201).json(temps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTemperaments;
