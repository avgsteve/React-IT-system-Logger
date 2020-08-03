import { combineReducers } from 'redux';
import logReducer from './logReducer';


export default combineReducers({
    log: logReducer, //exporting state from logReducer
});;


/*
combineReducers:
Turns an object whose values are different reducer functions, into a single reducer function. It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions.
*/