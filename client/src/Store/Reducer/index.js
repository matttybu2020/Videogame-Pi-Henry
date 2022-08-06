
import {GET_ALL_GAMES ,GET_ALL_GENRES} from '../Action/constantes'

const initialState = {
    allGames: [],
    backGames:[],
    detailGames:[],
    genresGames:[],
    filteredGames:[]
    

}

export default function rootReducer(state = initialState,action){

    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: action.payload,
                backGames: action.payload,
                filteredGames: action.payload

            };

            case GET_ALL_GENRES:
                return {
                    ...state,
                    genres: action.payload
                };
            default: 
            return state;

    }
    
};



