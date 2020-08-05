import { createStore, applyMiddleware } from 'redux'; //
import { composeWithDevTools } from 'redux-devtools-extension'; //
import thunk from 'redux-thunk'; //
import rootReducer from './reducers'; //one reducer combines all the others

const initialState = {};

const middleware = [thunk]; // an Array of middlewares


const centralizedStore = createStore( //
  rootReducer, // use one centralized reducer file for all reducers to create "store" data for global state
  initialState, // empty object
  composeWithDevTools(
    applyMiddleware(...middleware) // using middlewares from package 'redux-devtools-extension'
  )

  //ref: https://github.com/zalmoxisus/redux-devtools-extension#usage
);

export default centralizedStore;
// then import this store file to App.js as global state data provider
// In App.js :  import store from './store';

