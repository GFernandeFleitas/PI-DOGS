const axios = require("axios");
require("dotenv").config();
const { Sequelize, Op } = require("sequelize");

const { API_KEY, URL } = process.env;

const { Dog } = require("../db.js");

const searchDogs = async (req, res) => {
  try {
    const dogName = req.query.name;
    let orderedDogs = [];
    console.log(req.query);

    // API call
    const { data } = await axios(`${URL}?api_key=${API_KEY}`);
    const dogs = data.length ? data : [];
    let apiDogs = [];

    dogs?.map((dog) => {
      const { id, name, image, weight, height, life_span, temperament } = dog;
      const auxTemp = temperament && temperament.split(", ");
      apiDogs.push({
        id,
        name,
        image: `${image.url}`,
        weight: `${weight.metric}`,
        height: `${height.metric}`,
        life_span,
        temperament: auxTemp,
      });
    });

    // Filter dogs from API
    let allDogs = [];
    apiDogs.forEach((dog) => {
      if (dog.name.toLowerCase().includes(dogName.toLowerCase())) {
        allDogs.push(dog);
      }
    });

    // Database query
    const dogsFromDataBase = await Dog.findAll({
      where: {
        name: {
          [Op.iLike]: `%${dogName}%`,
        },
      },
    });

    console.log(dogsFromDataBase);

    // Send the response
    res.status(200).json({
      apiDogs: allDogs,
      dbDogs: dogsFromDataBase.length ? [...dogsFromDataBase] : [],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = searchDogs;
