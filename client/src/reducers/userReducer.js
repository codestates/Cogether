import {
  SET_IS_SIGNIN,
  SET_SIGNIN_MODAL,
  SET_REQUIRE_MODAL,
  SET_IS_GOOGLESIGNIN,
  SET_USER_DELETE,
  SET_POST_DELETE,
  SET_POST_ID,
  SET_USER_STACK,
  SET_IS_REPLACE,
  SET_USERINFO,
  SET_IS_ACTIVE,
  SET_IS_TOGGLE,
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

    case SET_POST_DELETE:
      return Object.assign({}, state, {
        isPostDelete: action.payload,
      });

    case SET_POST_ID:
      return Object.assign({}, state, {
        isPostId: action.payload,
      });

    case SET_USER_STACK:
      return Object.assign({}, state, {
        isStack: action.payload,
      });
    case SET_IS_REPLACE:
      return Object.assign({}, state, {
        isReplace: action.payload.isReplace,
      });
    case SET_USERINFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case SET_IS_ACTIVE:
      return Object.assign({}, state, {
        isActive: action.payload.isActive,
      });
    case SET_IS_TOGGLE:
      return Object.assign({}, state, {
        istoggle: action.payload.istoggle,
      });
    default:
      return state;
  }
};

export default itemReducer;
