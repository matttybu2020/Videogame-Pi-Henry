import axios from "axios";
import {GET_ALL_GAMES} from '../Action/constantes'


//! traigo todos los juegos de API y DB


export function getAllGames (){
    return function (dispatch) {
        return axios.get("/videogames").then((res)=> {
            dispatch({
                type:GET_ALL_GAMES,
                payload: res.data
            });
        })
        .catch((err) => {return err})
    }
}