import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootReducer from './rootReducer';

const store = createStore(combineReducers(rootReducer), applyMiddleware(logger));
window.store = store;

export default store;