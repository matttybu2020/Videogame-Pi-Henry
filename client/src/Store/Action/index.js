import axios from "axios";
import {GET_ALL_GAMES , GET_ALL_GENRES } from '../Action/constantes'


//! traigo todos los juegos de API y DB


export function getAllGames() {
    return function (dispatch) {
      return axios
        .get("http://localhost:3001/Videogames")
        .then((res) => {
          dispatch({ type: GET_ALL_GAMES, payload: res.data });
        })
        .catch((err) => {
          return err;
        });
    };
  }


//! traigo todos generos

export function getAllGenres() {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/genres`)
      .then((res) => {
        dispatch({ type: GET_ALL_GENRES, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
}