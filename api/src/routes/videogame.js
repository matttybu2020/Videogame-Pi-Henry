const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

//!  GET /videogame/:idVideogame

//consulto el detalle que viene por id
/*
router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params

  if (idVideogame.includes('-')) {
    let videogameDb = await Videogame.findOne({
      where: {
        id: idVideogame,
      },
      include: Genre
    });

    // parseo el objeto

    videogameDb = JSON.stringify(videogameDb);
    videogameDb = JSON.parse(videogameDb);

    // dejo un array con los nombres de genero

    videogameDb.genres = videogameDb.genres.map(g => g.name);
    res.json(videogameDb);
  } else {
    try {
      // buscamos en la api
      const response = await axios.get(
        `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
       //  `https://api.rawg.io/api/games/${idVideogame}?key=97903335d1af41fe98802e32b6d78580`
      );

      let {
        id,
        name,
        background_image,
        genres,
        description,
        released: releaseDate,
        rating,
        platforms,
      } = response.data;
      genres = genres.map(g => g.name); // array con generos
      platforms = platforms.map(p => p.platforms.name); // array con las plataformas
      return res.json({
        id,
        name,
        background_image,
        genres,
        description,
        releaseDate,
        rating,
        platforms
      });
    } catch (error) {
      return console.log(error);
    }
  }
});*/


router.get('/:idVideogame', async (req, res) => {
  const { idVideogame } = req.params
  
  //verifico si es un juego creado y me trae el detalle de la DB
  if (idVideogame.includes('-')) {
      let videogameDb = await Videogame.findOne({
          where: {
              id: idVideogame,
          },
          include: Genre
      })
      //Parseo el objeto
      videogameDb = JSON.stringify(videogameDb);
      videogameDb = JSON.parse(videogameDb);
      
      //dejo un array con los nombres de genero solamente
      videogameDb.genres = videogameDb.genres.map(g => g.name);
      res.json(videogameDb)
  } else {
      //else (si no es un juego creado, voy a buscar la info a la API)
      try {
          const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
          let { id, name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
          genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
          platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
          return res.json({
              id,
              name,
              background_image,
              genres,
              description,
              releaseDate,
              rating,
              platforms
          })
      } catch (err) {
          return console.log(err)
      }
  }
  
})


//! POST /Videogame
/*
router.post("/", async (req, res) => {
  let { name, description, releaseDate, rating, genres, platforms } = req.body;
  platforms = platforms.join(", ");

  //const juegoExito = "Se a Creado Correctamente su Juego desde el Back";
  try {
    const juegoCreado = await Videogame.findOrCreate({
      // devuelve un array
      where: {
        name,
        description,
        releaseDate,
        rating,
        platforms,
      },
    });
    await juegoCreado[0].setGenres(genres); // realizo id de genres con el de juego creado
  } catch (error) {
    console.log(error);
  }

  res.send("Se a Creado Correctamente su Juego desde el Back");
});*/
router.post('/', async (req, res,next) => {  

  try {
    let { name,image, description, releaseDate, rating, platforms, genres} = req.body;
  platforms = platforms.toString();

  //! Control de Errores 
  
  if(!name || !description || !platforms){
    return res.status(404).json({msg: "Faltan enviar datos"})
}
  const addVgame = await Videogame.create({
     name,
     image,
     description,
     releaseDate,
     rating, 
     platforms
  })

//Find videogame genres from Genres table       
 const vgenre = await Genre.findAll({
     where:{name : genres}
 })
 //genro la asociacion
 addVgame.addGenre(vgenre)

  res.send('Se a Creado Correctamente su Juego desde el Back')
}
catch (error) {
  return next(error)
}})





  
  

/*//! Delete a videogame probar
  router.post('/delete/:name', async (req, res) => {
  const { name } = req.params;
  console.log('Delete de: ', name)
  try {
   const elem = await Videogame.destroy({
      where: {name: `${name}`}
   });
  } catch (error) {
      res.send(`Error in route /videogames/delete ${error}`);
  }
  res.send('Videogame has been deleted');
});*/
module.exports = router;
