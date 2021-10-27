import { SET_IS_SIGNIN, SET_SIGNIN_MODAL } from '../actions/index';
import { initialState } from './intialState';

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN_MODAL:
      return Object.assign({}, state, {
        isSigninModalOpen: action.payload,
      });

    case SET_IS_SIGNIN:
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin,
      });

    default:
      return state;
  }
};

export default itemReducer;
