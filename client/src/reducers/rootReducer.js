import ports from './ports';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ports: ports
})

export default rootReducer;