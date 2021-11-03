import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setConfirmModal } from '../actions';

const ConfirmModal = () => {
  const SigninInfo = useSelector((state) => state.userReducer);

  const { confirmModal } = SigninInfo;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setConfirmModal(false, ''));
  };

  return (
    <>
      {confirmModal.isOpen ? (
        <div className="Modal">
          <div className="ModalMain" />
          <div className="ModalBox">
            <div className="Modalcontent">{confirmModal.content}</div>
            <button className="ModalBtn" onClick={closeModal}>
              확인
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ConfirmModal;
