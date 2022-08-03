const { Router } = require("express");
const { API_KEY } = process.env;
const axios = require("axios");
const router = Router();
const { Genre } = require("../db");

router.get("/", async (_req, res) => {
  try {
    //si los tengo cargados en la Db los consumo desde alli
    const generosDb = await Genre.findAll();
    if (generosDb.length) return res.json(generosDb);
    // else se vabuscar ala api

    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const generos = response.data.results; // recibo un array de objetos el cual voy a filtrar
    console.log(generos);
    generos.forEach(async (g) => {
      await Genre.findOrCreate({
        where: {
          name: g.name,
        },
      });
    });
    // envio info optimizada
    const generosFront = generos .map(game => {
      return {
        id: game.id,
        name: game.name,
      };
    });
    res.json(generosFront);
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
