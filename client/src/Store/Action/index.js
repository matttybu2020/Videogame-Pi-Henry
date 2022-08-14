import axios from "axios";
import {GET_ALL_GAMES , GET_ALL_GENRES ,SEARCH_NAME ,VIDEO_DETAIL,FILTRADO,ORDER} from '../Action/constantes'
import {DELETE_GAME , CLEAR_CACHE ,CLEAR_GAME_CACHE }from '../Action/constantes'

//! traigo todos los juegos de API y DB

export function getAllGames() {
    return async function (dispatch) {
      try {
        const res = await axios
          .get("http://localhost:3001/Videogames");
        dispatch({ type: GET_ALL_GAMES, payload: res.data });
      } catch (err) {
        return err;
      }
    };
  }
/*
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
  }*/

//! busco los Juegos Query

export function searchName(name) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/Videogames?name=${name}`)
    .then((res) => {
      dispatch ({ type: SEARCH_NAME , payload:res.data })
    })
    .catch((error) => {return error
    });
  };
}

//! traigo los detalles por ID

export function getVideoDetail(id) {
  return function (dispatch) {
    axios.get (`http://localhost:3001/videogame/${id}`)
    .then((res) =>{
      dispatch({
        type:VIDEO_DETAIL,
        payload:res.data
      });
      
      })
      .catch((error) => {
        return error
    });
  }
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


//!  Ordenamiento

export function order(order) {
  return function (dispatch) {
    dispatch ({type:
      ORDER, payload:order

    })

  }

}

//!   Filtrado

export function filtrado(order) {
  return function (dispatch) {
    dispatch ({type:
      FILTRADO, payload:order

    })

  }

}



//todo Prueba Beta DELETE
export const deleteGame = (id) => async (dispatch) => {
  try {
      await axios.delete(`http://localhost:3001/videogames/${id}`)
      dispatch({type: DELETE_GAME})
  } catch (error) {
      console.log(error)   
  };
}

export const clearGameCache = () => {
  return {
      type: CLEAR_GAME_CACHE
  }
}

export const clearCache = () => {
  return {
      type: CLEAR_CACHE
  }
}

