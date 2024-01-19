const axios = require("axios");
require("dotenv").config();

const { API_KEY, URL } = process.env;

const { Dog } = require("../db.js");

const getAllDogs = async (req, res) => {
  try {
    const response = await axios(`${URL}?api_key=${API_KEY}`);
    const dogsFromDataBase = await Dog.findAll();
    const allDogos = response.data;

    return allDogos.length
      ? res.status(200).json({ apiDogs: allDogos, dbDogs: dogsFromDataBase })
      : res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllDogs;
