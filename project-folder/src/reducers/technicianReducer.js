import {
    GET_TECHNICIANS, ADD_TECHNICIANS, DELETE_TECHNICIANS, SET_LOADING, TECHNICIAN_ERROR
} from '../actions/types';

const initialState = {
    technicians: null,
    loading: false,
    error: null,
};


export default (
    state = initialState, //讓 state 的預設數值是 上面的 initialState
    action) => {

    switch (action.type) {

        case GET_TECHNICIANS: // Get data from server
            return {
                ...state, // then return current fetched data
                technicians: action.payload,
                loading: false // set loading to true

            };

        case SET_LOADING:
            return {
                ...state,
                loading: true // set loading to true
            };

        // case LOGS_ERROR:
        //     console.log(`\nThere's an error:\n`);
        //     console.error(action.payload);
        //     console.log(action.payload);
        //     return {
        //         ...state,
        //         error: action.payload
        //     };

        // case ADD_NEW_LOG:
        //     console.log(`\nAdd & Update the state with reducer now ...\n`);
        //     return {
        //         ...state,
        //         logs: [ // return the NEW logs object data make of:
        //             ...state.logs, // original logs data
        //             action.payload // & appended log data
        //         ],
        //         loading: false,
        //     };

        // case DELETE_LOG:
        //     console.log(`\nReady to delete one log with reducer now ...\n`);
        //     return {
        //         ...state,
        //         logs: state.logs.filter( //use filtered "logs" items as new logs obj to update the "logs" object in state
        //             log => log.id !== action.payload // action.payload passed into reducer is the value of "id"!! 
        //             //filter and keep the logs have the id NOT eqaul to the action.id
        //         ),
        //         loading: false,
        //     };

        // case UPDATE_LOG:
        //     return {
        //         ...state,
        //         logs: state.logs.map(log => // find matched log and return the payload to update the log in the item of the new Array
        //             log.id === action.payload.id ? action.payload : log)
        //     };


        // case SET_CURRENT:
        //     return {
        //         ...state,
        //         current_editing_log: action.payload // use a log data to assign value to "current" property in store
        //     };

        // case CLEAR_CURRENT:
        //     return {
        //         ...state,
        //         current_editing_log: null
        //     };

        // case SEARCH_LOGS:
        //     return {
        //         ...state,
        //         logs: action.payload
        //     };

        default:
            return state;
    }
};



/*
Note:
To be imported to index.js for combineReducers({reducers})
*/
