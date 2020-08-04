import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
} from '../actions/types';

const initialState = {
    logs: null,
    currrent: null,
    loading: false,
    error: null,
};


export default (state = initialState, action) => {

    switch (action.type) {

        case GET_LOGS:
            return {
                ...state, // return current fetched data
                loading: false // set loading back to true
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true // set loading to true
            };

        case LOGS_ERROR:
            console.log(`\nThere's an error:\n`);
            console.error(action.payload);
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };


        default:
            return state;
    }
};

/*
Note:
To be imported to index.js for combineReducers({reducers})
*/
