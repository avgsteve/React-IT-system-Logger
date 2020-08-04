import { combineReducers } from 'redux';
import logReducer from './logReducer';

// === This file combines all other reducers with combineReducers nmethod from package 'redux' ====

export default combineReducers({
    data_from_combined_log_reducers: logReducer,  // contains all  action types for log operation and data (as global state to be rendered by <App /> and its component <Provider />)


    // Can pass other reducers to be combined into one reducer file like this one
});


/*
combineReducers:
Turns an object whose values are different reducer functions, into a single reducer function. It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions.
*/