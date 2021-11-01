export const SET_IS_SIGNIN = 'SET_IS_SIGNIN';
export const SET_SIGNIN_MODAL = 'SET_SIGNIN_MODAL';
export const SET_REQUIRE_MODAL = 'SET_REQUIRE_MODAL';
export const SET_CONFIRM_MODAL = 'SET_CONFIRM_MODAL';

export const setIsLogin = (isLogin) => {
  return {
    type: SET_IS_SIGNIN,
    payload: {
      isLogin,
    },
  };
};

export const setSigninModal = (boolean) => {
  return {
    type: SET_SIGNIN_MODAL,
    payload: boolean,
  };
};

export const setRequireModal = (boolean) => {
  return {
    type: SET_REQUIRE_MODAL,
    payload: boolean,
  };
};

export const setConfirmModal = (boolean, content) => {
  return {
    type: SET_CONFIRM_MODAL,
    payload: {
      isConfirmOpen: boolean,
      content: content,
    },
  };
};
