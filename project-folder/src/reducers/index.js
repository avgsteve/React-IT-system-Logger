import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './technicianReducer';

export default combineReducers({
  log: logReducer,
  technicians: techReducer
});
