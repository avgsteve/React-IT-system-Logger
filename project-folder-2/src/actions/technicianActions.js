import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

// Get technicians from server
export const action_getTechnicians = () => async dispatch => {
  try {
    action_setLoading();

    const res = await fetch('/technicians');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add technician to server
export const action_addTechnician = tech => async dispatch => {
  try {
    action_setLoading();

    const res = await fetch('/technicians', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const action_deleteTechnician = id => async dispatch => {
  try {
    action_setLoading();

    await fetch(`/technicians/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const action_setLoading = () => {
  return {
    type: SET_LOADING
  };
};
