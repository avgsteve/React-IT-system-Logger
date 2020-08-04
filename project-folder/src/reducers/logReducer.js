import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_NEW_LOG,
    DELETE_LOG,
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

        case ADD_NEW_LOG:
            console.log(`\nAdd & Update the state with reducer now ...\n`);
            return {
                ...state,
                logs: [ // return the NEW logs object data make of:
                    ...state.logs, // original logs data
                    action.payload // & appended log data
                ],
                loading: false,
            };

        case DELETE_LOG:
            console.log(`\nReady to delete one log with reducer now ...\n`);
            return {
                ...state,
                logs: state.logs.filter( //use filtered "logs" items as new logs obj to update the "logs" object in state
                    log => log.id !== action.payload // action.payload passed into reducer is the value of "id"!! 
                    //filter and keep the logs have the id NOT eqaul to the action.id
                ),
                loading: false,
            };


        default:
            return state;
    }
};






/*
Note:
To be imported to index.js for combineReducers({reducers})
*/
