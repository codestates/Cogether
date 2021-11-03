import { combineReducers } from 'redux';
import userReducer from './userReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  userReducer,
  messageReducer,
});

export default rootReducer;
