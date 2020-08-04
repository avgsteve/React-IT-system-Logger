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
    attention: false,
    testLog: "test",
};


export default (
    state = initialState, //讓 state 的預設數值是 上面的 initialState
    action) => {

    switch (action.type) {

        case GET_LOGS: // Get data from server
            return {
                ...state, // then return current fetched data
                loading: false, // finally, set loading back to true
                // testLog: "in GET_LOGS"
                logs: action.payload
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
