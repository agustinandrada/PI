module.exports = dogByName = async (req, res) => {
  const { name } = req.query;
  try {
    const dogs = await findAllDogs({ name });
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
