import {createStore, combineReducers} from 'redux';
import rootReducer from './rootReducer';

const store = createStore(combineReducers(rootReducer));
window.store = store;

export default store;