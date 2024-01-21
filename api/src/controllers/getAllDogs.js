const axios = require("axios");
require("dotenv").config();

const { API_KEY, URL } = process.env;

const { Dog } = require("../db.js");

const getAllDogs = async (req, res) => {
  try {
    const response = await axios(`${URL}?api_key=${API_KEY}`);
    const dogsFromDataBase = await Dog.findAll();
    let allDogs = [];

    response.data.map((dog) => {
      const { id, name, image, weight, height, life_span, temperament } = dog;
      const auxTemp = temperament && temperament.split(", ");
      allDogs.push({
        id,
        name,
        image: `${image.url}`,
        weight: `${weight.metric}`,
        height: `${height.metric}`,
        life_span,
        temperament: auxTemp,
      });
    });

    return allDogs.length
      ? res.status(200).json({ apiDogs: allDogs, dbDogs: dogsFromDataBase })
      : res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllDogs;
