const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;
const { Temperament } = require("../db.js");

const getAllTemperaments = async (req, res) => {
  try {
    const response = await axios.get(`${URL}?api_key=${API_KEY}`);

    let allDogsTemperaments = [];

    response.data.forEach((dog) => {
      const { temperament } = dog;

      const auxTemp = temperament && temperament.split(", ");
      auxTemp &&
        auxTemp.forEach((temp) => {
          if (!allDogsTemperaments.includes(temp)) {
            allDogsTemperaments.push(temp);
          }
        });
    });

    let allDogsTemperamentsDB = await Temperament.findAll();

    if (allDogsTemperamentsDB.length) {
      return res
        .status(200)
        .json({ allDogsTemperaments: allDogsTemperamentsDB });
    } else {
      for (const temperament of allDogsTemperaments) {
        await Temperament.create({
          temperament,
        });
      }

      allDogsTemperamentsDB = await Temperament.findAll();

      return res
        .status(200)
        .json({ allDogsTemperaments: allDogsTemperamentsDB });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllTemperaments;
