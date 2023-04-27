const { Dog } = require("../db");

const createDog = async ({
  image,
  name,
  height,
  weight,
  life_span,
  temperaments,
}) => {
  const newDog = await Dog.create({
    image,
    name,
    height,
    weight,
    life_span,
  });
  await newDog.addTemperaments(temperaments);
  return newDog;
};

module.exports = createDog;
