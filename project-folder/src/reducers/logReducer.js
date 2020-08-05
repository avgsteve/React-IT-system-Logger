import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/types';

const initialState = {
  logs_in_array: null,
  current_editing: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs_in_array: action.payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs_in_array: [...state.logs_in_array, action.payload], // append payload (newly added log) to current Array of logs_in_array data
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs_in_array: state.logs_in_array.filter(log => log.id !== action.payload),
        loading: false
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs_in_array: state.logs_in_array.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs_in_array: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current_editing: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current_editing: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
