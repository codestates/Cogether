import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuarterModal, setIsLogin } from '../actions';
import { useHistory } from 'react-router';

const QuarterModal = () => {
  const QuarterInfo = useSelector((state) => state.messageReducer);
  const Delete = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const { quarterModal } = QuarterInfo;
  const { isDelete } = Delete;

  const closeModal = () => {
    dispatch(setQuarterModal(false, ''));
  };

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/users/deletion`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        console.log('회원탈퇴 성공');
        dispatch(setIsLogin(false));
        dispatch(setQuarterModal(false, ''));
        history.push('/');
      })
      .catch((err) => {
        console.log('회원탈퇴 실패');
      });
  };

  return (
    <>
      {quarterModal.isOpen ? (
        <div className="Modal">
          <div className="ModalMain" />
          <div className="ModalBox">
            <div className="Modalcontent">{quarterModal.content}</div>
            <div className="ModalBtnBox">
              {isDelete ? (
                <button className="ModalBtn" onClick={handleDelete}>
                  회원 탈퇴
                </button>
              ) : (
                <button className="ModalBtn">예</button>
              )}
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
