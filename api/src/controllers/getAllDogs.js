const axios = require("axios");
require("dotenv").config();

const { API_KEY, URL } = process.env;

const getAllDogs = async (req, res) => {
  try {
    const response = await axios(`${URL}?api_key=${API_KEY}`);
    const allDogos = response.data;
    return allDogos.length
      ? res.send(allDogos)
      : res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllDogs;
