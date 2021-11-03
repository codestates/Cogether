import {
  SET_MESSAGE,
  SET_EMAIL_MESSAGE,
  SET_PASSWORD_MESSAGE,
  SET_NICKNAME_MESSAGE,
} from '../actions/index';
import { initialState } from './intialState';

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return Object.assign({}, state, {
        isMessage: action.payload,
      });

    case SET_EMAIL_MESSAGE:
      return Object.assign({}, state, {
        emailMessage: action.payload,
      });

    case SET_PASSWORD_MESSAGE:
      return Object.assign({}, state, {
        passwordMessage: action.payload,
      });

    case SET_NICKNAME_MESSAGE:
      return Object.assign({}, state, {
        nicknameMessage: action.payload,
      });

    default:
      return state;
  }
};

export default itemReducer;
