export const SET_IS_SIGNIN = 'SET_IS_SIGNIN';
export const SET_SIGNIN_MODAL = 'SET_SIGNIN_MODAL';
export const SET_REQUIRE_MODAL = 'SET_REQUIRE_MODAL';
export const SET_CONFIRM_MODAL = 'SET_CONFIRM_MODAL';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_IS_GOOGLESIGNIN = 'SET_IS_GOOGLESIGNIN';
export const SET_EMAIL_MESSAGE = 'SET_EMAIL_MESSAGE';
export const SET_PASSWORD_MESSAGE = 'SET_PASSWORD_MESSAGE';
export const SET_NICKNAME_MESSAGE = 'SET_NICKNAME_MESSAGE';

export const setIsLogin = (isLogin) => {
  return {
    type: SET_IS_SIGNIN,
    payload: {
      isLogin,
    },
  };
};

export const setIsGoogleLogin = (isGoogleLogin) => {
  return {
    type: SET_IS_GOOGLESIGNIN,
    payload: {
      isGoogleLogin,
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
      isOpen: boolean,
    },
  };
};

export const setMessage = (content) => {
  return {
    type: SET_MESSAGE,
    payload: content,
  };
};

export const setEmailMessage = (content) => {
  return {
    type: SET_EMAIL_MESSAGE,
    payload: content,
  };
};

export const setPasswordMessage = (content) => {
  return {
    type: SET_PASSWORD_MESSAGE,
    payload: content,
  };
};

export const setNicknameMessage = (content) => {
  return {
    type: SET_NICKNAME_MESSAGE,
    payload: content,
  };
};
