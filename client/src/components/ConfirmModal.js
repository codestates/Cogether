import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setConfirmModal, setIsReplace } from '../actions';
import '../scss/Modal.scss';

const ConfirmModal = () => {
  const confirm = useSelector((state) => state.messageReducer);
  const userInfo = useSelector((state) => state.userReducer);

  const { confirmModal } = confirm;
  const { isReplace, isRequireModalOpen, isSigninModalOpen } = userInfo;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setConfirmModal(false, ''));
    if (isReplace) {
      window.location.replace(`/Setting`);
      dispatch(setIsReplace(false));
    }
  };

  return (
    <>
      {confirmModal.isOpen ? (
        <div className="Modal">
          <div
            className={
              (confirmModal.isOpen && isRequireModalOpen) ||
              (confirmModal.isOpen && isSigninModalOpen)
                ? 'DubleModal'
                : 'ModalMain'
            }
          />
          <div className="ConfirmModalBox">
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
