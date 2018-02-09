import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const ports = (state = [], action) => {
  switch(action.type) {
    case 'GET_PORTS_SUCCESS':
      return action.ports;

    default:
      return state;
  }
}

const reducers = combineReducers({
  ports: ports
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)