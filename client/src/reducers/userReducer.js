import {
  SET_IS_SIGNIN,
  SET_SIGNIN_MODAL,
  SET_REQUIRE_MODAL,
  SET_IS_GOOGLESIGNIN,
  SET_USER_DELETE,
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

    case SET_IS_GOOGLESIGNIN:
      return Object.assign({}, state, {
        isGoogleLogin: action.payload.isGoogleLogin,
      });

    case SET_USER_DELETE:
      return Object.assign({}, state, {
        isDelete: action.payload,
      });

    default:
      return state;
  }
};

export default itemReducer;
