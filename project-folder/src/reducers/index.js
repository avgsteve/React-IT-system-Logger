import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './technicianReducer';

export default combineReducers({
  log_data_in_store: logReducer,
  technicians_data_in_store: techReducer
});
