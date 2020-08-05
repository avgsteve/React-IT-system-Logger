import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  technicians: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        technicians: action.payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        technicians: [...state.technicians, action.payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        technicians: state.technicians.filter(tech => tech.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
