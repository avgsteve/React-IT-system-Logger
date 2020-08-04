import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_NEW_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';


// Set loading to true before getting data
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};


// Get logs from server (this block is for reference)
// export const getLogs = () => {

//   return async dispatch => {
//     setLoading(); // set loading to true

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };

// };


// Get logs from server (by returning dispatch function)
// And set new data to state with dispatch
export const getLogs = () => async dispatch => {

  try {

    console.log('\nAction of "getLogs" has started!\n');

    setLoading();

    const res = await fetch('http://localhost:5000/logs');
    const data = await res.json();

    // console.log('data from getLogs in logActions.js :', data);

    dispatch({
      type: GET_LOGS,
      payload: data
    });

  } catch (err) {

    dispatch({
      type: LOGS_ERROR,
      payload: err
    });

  }
};


// Add new log with passed-in log data 
export const actionAddNewLog = new_log_data => async dispatch => {

  try {

    console.log(`actionAddNewLog initiated ...`);

    setLoading();

    const res = await fetch('http://localhost:5000/logs', {
      method: 'POST',
      body: JSON.stringify(new_log_data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const updated_log_data_from_server = await res.json();

    console.log(`\nsending dispatch to Reducer ...`);

    dispatch({
      type: ADD_NEW_LOG, // will send dispatch data to reducer
      payload: updated_log_data_from_server, // and update the state with updated data from server

      // payload: {
      //   data: updated_log_data,
      //   server_response: res
      // }),
    });

  } catch (err) {

    console.log('  \nThere\'s an error while adding new data with actionAddNewLog in logActions.js.  Error log:\n  ', err);

    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });

  }
};


// Delete log from server (and use argument id as payload)
export const actionDeleteLogWithId = id => async dispatch => {

  try {
    setLoading();

    console.log('\nAction of "actionDeleteLogWithId" has started!\n');

    await fetch(`http://localhost:5000/logs/${id}`
      , { method: 'DELETE' }
    );


    dispatch({
      type: DELETE_LOG,
      payload: id
    });

    console.log(`Data with the id: ${id} has been deleted!`);

  } catch (err) {

    dispatch({
      type: LOGS_ERROR,
      payload: err
    });

  }
};

// Update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading();

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
export const searchLogs = text => async dispatch => {
  try {
    setLoading();

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

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};
