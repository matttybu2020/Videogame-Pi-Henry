const { Router } = require("express");
const axios = require("axios");
const router = Router();
//const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

//! get a /Videogames
//console.log(API_KEY)97903335d1af41fe98802e32b6d78580
router.get("/", async (req,res) => {
  let videoGdB = await Videogame.findAll({
    include: Genre,
  });

  // parseo el objeto
  videoGdB = JSON.stringify(videoGdB);
  videoGdB = JSON.parse(videoGdB);
  //solo los nombres de cada genero array
  videoGdB = videoGdB.reduce(
    (acc, el) =>
      acc.concat({
        ...el,
        genres: el.genres.map(g => g.name)
      }),
    []
  );

  //! GET /Videogames?name=".." buscamos por "name"
  if (req.query.name) {
    try {
      //realizamos la busqueda
      let response = await axios.get(
        `https://api.rawg.io/api/games?search=${req.query.name}&key=97903335d1af41fe98802e32b6d78580`
        //`https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`
        );
//console.log(response.data)
      if (!response.data.count)
        return res
          .status(204)
          .json(`El Juego no se encuentra ${req.query.name}`);

      // si lo encuentra retornamos los que enviamos al front

      const gamesFront = response.data.results.map(game => {
        return {
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres.map(g => g.name)
        }
      });

      // realizamos el filtrado  para que coincidan

      const filtroGameDb = videoGdB.filter(g =>
        g.name.toLowerCase().includes(req.query.name.toLowerCase())
      );
      const results = [...filtroGameDb, ...gamesFront.splice(0, 15)]; // corto el array en 5  y prioriso db
      return res.json(results);
    } catch (error) {
      return console.log(error);
    }
  } else {
    // en el caso de n oentar traigo todos los juegos APi
    try {
      let pages = 0;
       //  lo que en db
      let results = [...videoGdB];  
      let response = await axios.get(
        `https://api.rawg.io/api/games?key=97903335d1af41fe98802e32b6d78580`
       // `https://api.rawg.io/api/games?key=${API_KEY}`
      );

      while (pages < 6) {
        pages++;
        // envio los datos al front
        const gamesFront = response.data.results.map(game => {
          return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating,
            genres: game.genres.map(g => g.name),
          };
        });
        results = [...results, ...gamesFront];
        response = await axios.get(response.data.next); // volvemos a llamar api
      
    }
      //console.log(results.data)
      return res.json(results);
     
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
});

module.exports = router;
