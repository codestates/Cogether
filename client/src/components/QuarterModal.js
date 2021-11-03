import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuarterModal } from '../actions';

const QuarterModal = () => {
  const QuarterInfo = useSelector((state) => state.messageReducer);
  const { quarterModal } = QuarterInfo;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setQuarterModal(false, ''));
  };

  return (
    <>
      {quarterModal.isOpen ? (
        <div className="Modal">
          <div className="ModalMain" />
          <div className="ModalBox">
            <div className="Modalcontent">{quarterModal.content}</div>
            <div className="ModalBtnBox">
              <button className="ModalBtn">예</button>
              <button className="ModalBtn" onClick={closeModal}>
                아니요
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default QuarterModal;
