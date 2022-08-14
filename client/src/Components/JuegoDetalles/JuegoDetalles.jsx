import {React, useEffect} from 'react'
import { connect }from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getVideoDetail } from '../../Store/Action/index'
import Navbar from '../NavBar/NavBar.jsx'
import './JuegoDetalles.css'
import photo from '../../img/photo.png'

 function JuegoDetalles(props){

    const {getVideoDetail, detailGames} = props
    const {idVideogame} = props.match.params;

    // me carga los details del juego
    useEffect(() => {
        getVideoDetail(idVideogame);
    },[idVideogame])

    return (
      <div className="container-detail">
        <Navbar />
        <div className="details-div">
          {detailGames ? (
            <div>
              <h3 className="title">{detailGames.name}</h3>
              {detailGames.background_image ? (
                <div className="div-img">
                  <img src={detailGames.background_image} alt="Videogame"></img>
                </div>
              ) : (
                <div className="div-img">
                  <img src={photo} alt="Videogame"></img>
                </div>
              )}
              {
                <p>
                  <strong>📅 Release Date</strong>:{" "}
                  {`${detailGames.releaseDate || "None"}`}
                </p>
              }
              <p>
                <strong> 🏆 Rating</strong>:{`${detailGames.rating}`}
              </p>
              {detailGames.description &&
              detailGames.genres &&
              detailGames.platforms ? (
                <div className="div-descr">
                  {
                    <p className="descripcion">
                      {detailGames.description.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                  }
                  {
                    <p>
                      <strong>🎮 Genres</strong>:{" "}
                      {`${detailGames.genres.join(", ")}`}
                    </p>
                  }
                  {
                    <p>
                      <strong>🕹️ Platforms</strong>:{" "}
                      {`${
                        typeof detailGames.platforms === "string"
                          ?detailGames.platforms
                          :detailGames.platforms.join(", ")
                      }`}
                    </p>
                  }
                  <NavLink to="/videogames">
                    <button>Volver</button>
                  </NavLink>
                </div>
              ) : (
                <h1>Cargando</h1>
              )}
            </div>
          ) : (
            <h1>Cargando</h1>
          )}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        detailGames: state.detailGames
    }
}

export default connect(mapStateToProps, {getVideoDetail}) (JuegoDetalles)
