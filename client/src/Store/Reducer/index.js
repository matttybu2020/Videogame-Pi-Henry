
import {GET_ALL_GAMES ,GET_ALL_GENRES ,SEARCH_NAME,VIDEO_DETAIL,ORDER,FILTRADO} from '../Action/constantes'
import {DELETE_GAME , CLEAR_CACHE ,CLEAR_GAME_CACHE} from '../Action/constantes'

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
            case DELETE_GAME:
            return {
                ...state,
                
            };
            case VIDEO_DETAIL:
                return{
                    ...state,
                    detailGames: action.payload

                };
            case SEARCH_NAME:
                return {
                    ...state,
                    backGames:action.payload,
                    filteredGames:action.payload


                };
                case CLEAR_CACHE:
                    return {
                        ...state,
                        games: [],
                        allGames: []
                    }
                
                case CLEAR_GAME_CACHE:
                    return {
                        ...state,
                        game: []
                    };
                case GET_ALL_GENRES:
                    return {
                        ...state,
                        genres: action.payload
                    };
                case FILTRADO:
                    if (action.payload === 'default'){
                        return {...state, filteredGames: state.backGames}
                        }
                      
                    if(action.payload === 'DB'){
                        return {...state, filteredGames: state.backGames.filter((game)=> (typeof game.id) === 'string')}
                        }
                      
                    if(action.payload === 'API'){
                        return {...state, filteredGames: state.backGames.filter((game)=> (typeof game.id) === 'number')}
                        }
                      
                    else {
                        return {...state, filteredGames: state.backGames.filter((game) => {
                            return game.genres.find((genre) => {
                                return genre === action.payload})
                        })}
                    };
                    case ORDER:
                        if(action.payload === 'A-Z'){
                            return {...state, filteredGames: [...state.filteredGames].sort((prev, next) => {
                                if(prev.name > next.name) return 1
                                if(prev.name < next.name) return -1
                                return 0
                            })}}
                              
                        if(action.payload === 'Z-A'){
                            return {...state, filteredGames: [...state.filteredGames].sort((prev, next) => {
                                if(prev.name > next.name) return -1
                                if(prev.name < next.name) return 1
                                return 0
                            })}}
                              
                        if(action.payload === 'desc'){
                            return {...state, filteredGames: [...state.filteredGames].sort((prev,next) => prev.rating - next.rating)}
                           }
                              
                        if(action.payload === 'asc'){
                            return {...state, filteredGames: [...state.filteredGames].sort((prev,next) => next.rating - prev.rating)}
                            }     
                        else {
                            return {...state, filteredGames: state.backGames}
                            }; 

           
            default: 
            return state;

    }
    
};



