import {
  SET_MESSAGE,
  SET_EMAIL_MESSAGE,
  SET_PASSWORD_MESSAGE,
  SET_NICKNAME_MESSAGE,
  SET_QUARTER_MODAL,
  SET_CONFIRM_MODAL,
} from '../actions/index';
import { initialState } from './intialState';

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return Object.assign({}, state, {
        isMessage: action.payload,
      });

    case SET_CONFIRM_MODAL:
      return Object.assign({}, state, {
        confirmModal: { ...action.payload },
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

    case SET_QUARTER_MODAL:
      return Object.assign({}, state, {
        quarterModal: { ...action.payload },
      });

    default:
      return state;
  }
};

export default itemReducer;
