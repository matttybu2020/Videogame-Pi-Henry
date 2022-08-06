
import {GET_ALL_GAMES} from '../Action/constantes'

const initialState = {
    allGames: [],
    backGames:[],
    detailGames:[],
    genresGames:[],
    filteredGames:[]
    

}

 function rootReducer(state = initialState,action){

    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: action.payload,
                backGames: action.payload,
                filteredGames: action.payload

            };
            default: 
            return state;

    }
    
};



export default rootReducer;