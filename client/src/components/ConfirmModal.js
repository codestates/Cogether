import React from 'react';
import { useDispatch } from 'react-redux';
import { setConfirmModal } from '../actions';

const ConfirmModal = ({ isOpenCon, content }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setConfirmModal(false, ''));
  };

  return (
    <>
      {isOpenCon ? (
        <div className="Modal">
          <div className="ModalMain" onClick={closeModal} />
          <div className="ModalBox">
            <div className="Modalcontent">{content}</div>
            <button onClick={closeModal}>확인</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ConfirmModal;
