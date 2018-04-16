import ports from './ports';
import favoritePorts from './favoritePorts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ports: ports,
  favoritePorts: favoritePorts
})

export default rootReducer;