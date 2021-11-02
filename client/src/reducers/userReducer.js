import {
  SET_IS_SIGNIN,
  SET_SIGNIN_MODAL,
  SET_REQUIRE_MODAL,
  SET_CONFIRM_MODAL,
  SET_MESSAGE,
  SET_EMAIL_MESSAGE,
  SET_NICK_MESSAGE,
  SET_PASSWORD_MESSAGE,
  SET_IS_GOOGLESIGNIN,
} from '../actions/index';
import { initialState } from './intialState';

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN_MODAL:
      return Object.assign({}, state, {
        isSigninModalOpen: action.payload,
      });

    case SET_REQUIRE_MODAL:
      return Object.assign({}, state, {
        isRequireModalOpen: action.payload,
      });

    case SET_IS_SIGNIN:
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin,
      });

    case SET_CONFIRM_MODAL:
      return Object.assign({}, state, {
        confirmModal: {
          ...action.payload,
        },
      });

    case SET_MESSAGE:
      return Object.assign({}, state, {
        isMessage: action.payload,
      });

    case SET_EMAIL_MESSAGE:
      return Object.assign({}, state, {
        isEmailMessage: action.payload,
      });

    case SET_NICK_MESSAGE:
      return Object.assign({}, state, {
        isNickMessage: action.payload,
      });

    case SET_PASSWORD_MESSAGE:
      return Object.assign({}, state, {
        isPasswordMessage: action.payload,
      });

    case SET_IS_GOOGLESIGNIN:
      return Object.assign({}, state, {
        isGoogleLogin: action.payload.isGoogleLogin,
      });

    default:
      return state;
  }
};

export default itemReducer;
