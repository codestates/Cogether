import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSigninModal, setConfirmModal } from '../actions/index';
import '../scss/Modal.scss';
import Signin from './Signin';
import Signup from './Signup';

const SigninModal = () => {
  const SigninInfo = useSelector((state) => state.userReducer);
  const confirm = useSelector((state) => state.messageReducer);
  const { confirmModal } = confirm;
  const { isSigninModalOpen } = SigninInfo;
  const [isSignin, setIsSignin] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfirmModal(false, ''));
  }, []);
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
          <div className={confirmModal.isOpen ? 'DubleModalBox' : 'ModalBox'}>
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
