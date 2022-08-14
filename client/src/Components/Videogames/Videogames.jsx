import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllGenres } from "../../Store/Action/index";
import { getAllGames } from "../../Store/Action/index";
import Videogame from "../Videogame/Videogame.jsx";
import Pagination from "../Pagination/Pagination";
import '../Videogames/Videogames.css'
import NavBar from "../NavBar/NavBar.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Filtrado from "../Filtrado/Filtrado.jsx";
import GameOver from "../GameOver/GameOver";




import Loading3 from "../../img/Loading3.gif";
//import gameover1 from "../../img/gameover1.gif";
//<img className="no" src={gameover1} alt=""></img>






function Videogames({allGames, getAllGames, getAllGenres }) {

  const [currentPage, setCurrentPage] = useState(1)

  const [cardPerPage] = useState(15)

  //* indices de la paginación:
  const indexOfLastCard = currentPage * cardPerPage
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  var currentCards; //"cards" que se deben mostrar en la pantalla

  // en caso de que al buscar un juego en particular no encuentra ninguno
  if(typeof allGames === 'string'){
      currentCards = allGames
  }else {
      currentCards = allGames.slice(indexOfFirstCard, indexOfLastCard) //uso los indices para "fraccionar que juegos muestro"
  }
  
  const paginate = (pageNumber) => {
       setCurrentPage(pageNumber)
  }

  useEffect (() => {
      getAllGames()
      getAllGenres()
  }, [getAllGames, getAllGenres])

  return (
    <div className="container">
     <NavBar />
     <SearchBar />
     <Filtrado />
     <Pagination
        cardPerPage={cardPerPage}
        totalCards={allGames.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <div className="games-div">
        {currentCards.length > 1 ? (
          currentCards.map((g) => (
            <Videogame
              key={g.id}
              name={g.name}
              rating={g.rating}
              genres={g.genres}
              image={g.background_image}
              id={g.id}
            />
          ))
        ) : typeof currentCards === "string" ? (
          <div>
            <GameOver />
            
          </div>
        ) : (
          <div>
            <img className="loading" src={Loading3} alt=""></img>
          </div>
        )}
      </div>
      <Pagination
        cardPerPage={cardPerPage}
        totalCards={allGames.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      allGames: state.filteredGames
  }
}

export default connect(mapStateToProps,{ getAllGames, getAllGenres }) (Videogames)


























/*
function Videogames({ allGames, getAllGames, getAllGenres }) {
  const [pagActual, setPagActual] = useState(1);
  const [cardPorPag] = useState(15);

  //paginacion

  const ultimaCard = pagActual * cardPorPag;
  const primeraCard = ultimaCard - cardPorPag;

  var todasCards; // muestran en pantalla

  if (typeof allGames === "string") {
    todasCards = allGames;
  } else {
    todasCards = allGames.slice(primeraCard, ultimaCard); // verifico a traves de los indices
  }

  const paginar = (paginaPorNumero) => {
    setPagActual(paginaPorNumero);
  };

  useEffect(() => {
    getAllGames();
    getAllGenres();
  }, []);

  return (
    <div className="container">
      <NavBar />
      <SearchBar />
      <Filtrado />
      <Pagination
        cardPerPage={cardPorPag}
        totalCards={allGames.length}
        paginate={paginar}
        currentPage={pagActual}
      />
      <div className="game-div">
        {todasCards.length > 1 ? (
          todasCards.map((g) => (
            <Videogame
              key={g.id}
              name={g.name}
              rating={g.rating}
              genres={g.genres}
              image={g.background_image}
              id={g.id}
            />
          ))
        ) : typeof currentCards === "string" ? (
          <div>
            <img className="nonono" src={gameover1} alt=""></img>
          </div>
        ) : (
          <div>
            <img className="loading" src={Loading3} alt=""></img>
          </div>
        )}
      </div>

      <Pagination
        cardPerPage={cardPorPag}
        totalCards={allGames.length}
        paginate={paginar}
        currentPage={pagActual}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allGames: state.filteredGames,
  };
};
export default connect(mapStateToProps, { getAllGames, getAllGenres })(
  Videogames
);*/
