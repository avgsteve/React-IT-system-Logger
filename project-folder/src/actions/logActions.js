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
} from './types';

// (Action function as Utility) 
// Set loading to true which represents current loading state
export const action_setLoading = () => {
  // set properties in store:
  // ...state,
  // loading: true;
  return {
    type: SET_LOADING
  };
};

// Get logs from server
export const action_getLogs = () => async dispatch => {
  try {
    action_setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new log
export const action_addLog = new_log => async dispatch => {
  try {
    action_setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(new_log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const newly_added_data = await res.json();

    console.log("New log data has been added:", newly_added_data);

    dispatch({
      type: ADD_LOG,
      payload: newly_added_data, // use new log data to update current store
    });

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete log from server
export const action_deleteLog = id => async dispatch => {
  try {
    action_setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update log on server
export const action_updateLog = log => async dispatch => {
  try {
    action_setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server logs
export const action_searchLogs = text => async dispatch => {
  try {
    action_setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current log as currently being edited
export const action_setAsCurrentEditing = log => {

  console.log(`Current log id:${log.id} has been set as "current editing" in Redux store`);

  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current log
export const action_clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};


