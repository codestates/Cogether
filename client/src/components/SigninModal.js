import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSigninModal } from '../actions/index';
import '../scss/Modal.scss';
import Signin from './Signin';
import Signup from './Signup';

const SigninModal = () => {
  const SigninInfo = useSelector((state) => state.userReducer);

  const { isSigninModalOpen } = SigninInfo;
  const [isSignin, setIsSignin] = useState(true);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setSigninModal(false));
    setIsSignin(true);
  };
  const HandlerSignin = () => {
    setIsSignin(!isSignin);
  };

  return (
    <>
      {isSigninModalOpen ? (
        <div className="SigninModal">
          <div className="ModalMain" onClick={closeModal} />
          <div className="ModalBox">
            <>
              {isSignin ? (
                <Signin variation={HandlerSignin} />
              ) : (
                <Signup variation={HandlerSignin} />
              )}
            </>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SigninModal;
