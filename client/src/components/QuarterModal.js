import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setQuarterModal,
  setConfirmModal,
  setIsLogin,
  setPostDelete,
  setUserDelete,
} from '../actions';
import { useHistory } from 'react-router';

const QuarterModal = () => {
  const QuarterInfo = useSelector((state) => state.messageReducer);
  const Delete = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const { quarterModal } = QuarterInfo;
  const { isDelete, isPostDelete, isPostId } = Delete;

  const closeModal = () => {
    dispatch(setQuarterModal(false, ''));
    dispatch(setUserDelete(false));
    dispatch(setPostDelete(false));
  };

  const handlePostDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/posts/${isPostId}`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        dispatch(setQuarterModal(false, ''));
        dispatch(setPostDelete(false));
        dispatch(setUserDelete(false));
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/users/deletion`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        dispatch(setIsLogin(false));
        dispatch(setQuarterModal(false, ''));
        dispatch(setConfirmModal(true, 'Cogether를 이용해 주셔서 감사합니다.'));
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
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
              {isPostDelete ? (
                <button className="ModalBtn" onClick={handlePostDelete}>
                  삭제
                </button>
              ) : null}
              {isDelete ? (
                <button className="ModalBtn" onClick={handleDelete}>
                  회원 탈퇴
                </button>
              ) : null}
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
