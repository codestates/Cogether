import { combineReducers } from 'redux';
import userReducer from './userReducer';
import messageReducer from './messageReducer';
import chattingReducer from './chattingReducer';

const rootReducer = combineReducers({
  userReducer,
  messageReducer,
  chattingReducer,
});

export default rootReducer;
