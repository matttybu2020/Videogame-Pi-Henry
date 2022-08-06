import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../Store/Reducer/index';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

















