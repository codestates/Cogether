export const SET_IS_SIGNIN = 'SET_IS_SIGNIN';
export const SET_SIGNIN_MODAL = 'SET_SIGNIN_MODAL';

export const setSigninModal = (boolean) => {
    return {
      type: SET_SIGNIN_MODAL,
      payload: boolean,
    };
  };
