require("dotenv").config();
const { Dog } = require("../db.js");

const createDogs = async (req, res) => {
  try {
    const { name, image, height, temperament } = req.body;
    if (name && image && height && temperament) {
      const createdDog = await Dog.create({
        name,
        image,
        height,
        temperament,
      });

      if (createdDog) {
        res.status(201).json(createdDog);
      } else {
        res.status(200).json(createdDog);
      }
    } else {
      return res.status(400).json({
        status: "error",
        message: "You must provide all the required data",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = createDogs;
