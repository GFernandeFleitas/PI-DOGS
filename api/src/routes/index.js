const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogs = require("../controllers/getAllDogs");
const createDogs = require("../controllers/createDog");
const searchDogs = require("../controllers/searchDogs");
const getAllTemperaments = require("../controllers/allTemperaments");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", getAllDogs);
router.get("/temperaments", getAllTemperaments);
router.get("/searchdogs", searchDogs);
router.post("/dogs", createDogs);

module.exports = router;
