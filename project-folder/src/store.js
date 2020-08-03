import { createStore, applyMiddleware } from 'redux'; //
import { composeWithDevTools } from 'redux-devtools-extension'; //
import thunk from 'redux-thunk'; //
import rootReducer from './reducers'; //

const initialState = {}; //

const middleware = [thunk]; // an Array of middlewares

const store = createStore( //
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware) // destructuring for for using thunk middlewares
  )

  //ref: https://github.com/zalmoxisus/redux-devtools-extension#usage
);

export default store;
