export const SET_IS_SIGNIN = 'SET_IS_SIGNIN';
export const SET_SIGNIN_MODAL = 'SET_SIGNIN_MODAL';
export const SET_REQUIRE_MODAL = 'SET_REQUIRE_MODAL';
export const SET_CONFIRM_MODAL = 'SET_CONFIRM_MODAL';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_IS_GOOGLESIGNIN = 'SET_IS_GOOGLESIGNIN';
export const SET_EMAIL_MESSAGE = 'SET_EMAIL_MESSAGE';
export const SET_PASSWORD_MESSAGE = 'SET_PASSWORD_MESSAGE';
export const SET_NICKNAME_MESSAGE = 'SET_NICKNAME_MESSAGE';
export const SET_QUARTER_MODAL = 'SET_QUARTER_MODAL';
export const SET_USER_DELETE = 'SET_USER_DELETE';
export const SET_POST_DELETE = 'SET_POST_DELETE';
export const SET_POST_ID = 'SET_POST_ID';
export const SET_USER_STACK = 'SET_USER_STACK';
export const SET_IS_REPLACE = 'SET_IS_REPLACE';
export const SET_USERINFO = 'SET_USERINFO';

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
      content: content,
      isOpen: boolean,
    },
  };
};

export const setQuarterModal = (boolean, content) => {
  return {
    type: SET_QUARTER_MODAL,
    payload: {
      isOpen: boolean,
      content: content,
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

export const setUserDelete = (boolean) => {
  return {
    type: SET_USER_DELETE,
    payload: boolean,
  };
};

export const setPostDelete = (boolean) => {
  return {
    type: SET_POST_DELETE,
    payload: boolean,
  };
};

export const setPostId = (content) => {
  return {
    type: SET_POST_ID,
    payload: content,
  };
};

export const setStack = (content) => {
  return {
    type: SET_USER_STACK,
    payload: content,
  };
};

export const setIsReplace = (isReplace) => {
  return {
    type: SET_IS_REPLACE,
    payload: {
      isReplace,
    },
  };
};

export const setUserInfo = (userInfo) => {
  return {
    type: SET_USERINFO,
    payload: {
      ...userInfo,
    },
  };
};
