import {
  GET_TECHNICIANS, ADD_TECHNICIANS, DELETE_TECHNICIANS, SET_LOADING, TECHNICIAN_ERROR
} from './types';


// Set loading to true before getting data
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};


// Get technicians from server (by returning dispatch function)
// And set new data to state with dispatch
export const actionGetTechnicians = () => async dispatch => {

  try {

    console.log('\nAction of "getTechnicians" has started!\n');

    setLoading();

    const res = await fetch('http://localhost:5000/technicians');
    const data = await res.json();

    // console.log('data from gettechnicians in technicianActions.js :', data);

    dispatch({
      type: GET_TECHNICIANS,
      payload: data
    });

  } catch (err) {

    dispatch({
      type: TECHNICIAN_ERROR,
      payload: err.response.statusText
    });

  }
};


// Add new technician with passed-in technician data 
export const actionAddNewtechnician = new_technician_data => async dispatch => {

  try {

    console.log(`actionAddNewtechnician initiated ...`);

    setLoading();

    const res = await fetch('http://localhost:5000/technicians', {
      method: 'POST',
      body: JSON.stringify(new_technician_data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const updated_technician_data_from_server = await res.json();

    console.log(`\nsending dispatch to Reducer ...`);

    dispatch({
      type: ADD_NEW_technician, // will send dispatch data to reducer
      payload: updated_technician_data_from_server, // and update the state with updated data from server

      // payload: {
      //   data: updated_technician_data,
      //   server_response: res
      // }),
    });

  } catch (err) {

    console.log('  \nThere\'s an error while adding new data with actionAddNewtechnician in technicianActions.js.  Error technician:\n  ', err);

    dispatch({
      type: technicianS_ERROR,
      payload: err.response.statusText
    });

  }
};


// Delete technician from server (and use argument id as payload)
export const actionDeletetechnicianWithId = id => async dispatch => {

  try {
    setLoading();

    console.log('\nAction of "actionDeletetechnicianWithId" has started!\n');

    await fetch(`http://localhost:5000/technicians/${id}`
      , { method: 'DELETE' }
    );


    dispatch({
      type: DELETE_technician,
      payload: id
    });

    console.log(`Data with the id: ${id} has been deleted!`);

  } catch (err) {

    dispatch({
      type: technicianS_ERROR,
      payload: err
    });

  }
};

// Update technician on server
export const actionUpdatetechnician = updatedtechnician => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:5000/technicians/${updatedtechnician.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedtechnician),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_technician,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: technicianS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server technicians
export const actionSearchtechnicians = search_key_word => async dispatch => {
  try {
    setLoading();

    const queryResult = await fetch(`http://localhost:5000/technicians?q=${search_key_word}`);
    const queryData = await queryResult.json();

    dispatch({
      type: SEARCH_technicianS,
      payload: queryData
    });

  } catch (err) {
    dispatch({
      type: technicianS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Use current technician and add a "current" property to the technician
export const actionSetCurrent = technician_item_for_editing => {
  return {
    type: SET_CURRENT,
    payload: technician_item_for_editing
  };
};

// Clear current technician
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};
