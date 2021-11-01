import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSigninModal } from '../actions/index';
import Signin from './Signin';
import Signup from './Signup';
import '../scss/Modal.scss';

const SigninModal = ({
  isOpen,
  isMessage,
  isEmailMessage,
  isNickMessage,
  isPasswordMessage,
}) => {
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
      {isOpen ? (
        <div className="SigninModal">
          <div className="ModalMain" onClick={closeModal} />
          <div className="ModalBox">
            <>
              {isSignin ? (
                <Signin variation={HandlerSignin} isMessage={isMessage} />
              ) : (
                <Signup
                  variation={HandlerSignin}
                  isEmailMessage={isEmailMessage}
                  isNickMessage={isNickMessage}
                  isPasswordMessage={isPasswordMessage}
                />
              )}
            </>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SigninModal;
