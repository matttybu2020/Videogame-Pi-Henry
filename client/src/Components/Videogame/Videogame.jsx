import React from "react";
import { Link } from "react-router-dom";
import Create from "../../img/Create.jpg";
import '../Videogame/Videogame.css'



export default function Videogame(props) {
    
  return (
    <div className="container-game">
      <div className="title-game">{props.name}</div>
      <div className="game-div">
        {props.image ? (
          <img src={`${props.image}`} alt="Videogame" className="Img"></img>
        ) : (
          <img src={Create} alt="Videogame" className="Img"></img>
        )}
      </div>
      <div className="infoRating">
        {
          <p>
            <strong>Rating</strong>: ★ {`${props.rating}`}
          </p>
        }
      </div>
      <div className="infoContGenres">
        {
          <p className="">
            <strong>Genres :</strong>{" "}
            {`${
              typeof props.genres === "string"
                ? props.genres
                : props.genres.join(", ")
            }`}
          </p>
        }
      </div>
      <div className="div-button">
        {props.id && (
          <Link to={`/videogame/${props.id}`}>
            <button className="Link">Details</button>
          </Link>
        )}
      </div>
    </div>
  );
}





















/*
export default function Videogame(props) {
  return (
    <div className="contendor-juego">
      <div className="titulo-juego">{props.name}</div>
      <div className="juego-div">
        {props.image ? (
          <img src={`${props.image}`} alt="Videogame" className="img"></img>
        ) : (
          <img src={Create} alt="Videogame" className="img"></img>
        )}
      </div>
      <div className="InfoRating">
        {
          <p>
            <strong>Rating</strong> ★ {`${props.rating}`}
          </p>
        }
      </div>

      <div className="infoDeGeneros">
        {
          <p className="">
            <strong>Genres</strong>{" "}
            {`${
              typeof props.genres === "string"
                ? props.genres
                : props.genres.join(", ")
            }`}
          </p>
        }
      </div>

      <div className="div-button">
        {props.id && (
          <Link to={`/videogame/${props.id}`}>
            <button className="Links">Detalles</button>
          </Link>
        )}
      </div>
    </div>
  );
}
*/