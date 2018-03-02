import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ports from './reducers/ports';

const reducers = combineReducers({ ports });

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)