import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../scss/postUserInfo.scss';
import { setConfirmModal } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { createRoom, getRooms } from '../reducers/chattingReducer';

const PostUserInfo = ({
  nickname,
  isImg,
  view,
  detailId,
  isInterest,
  authorId,
}) => {
  const [interest, setInterest] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const Login = useSelector((state) => state.userReducer);
  const { isLogin } = Login;

  useEffect(() => {
    {
      isInterest ? setInterest('#56d0a0') : setInterest('#cccccc');
    }
  }, [isInterest]);

  const changeInterest = () => {
    pushInterest();
    if (isLogin) {
      interest === '#56d0a0' ? setInterest('#cccccc') : setInterest('#56d0a0');
    }
  };
  const pushInterest = () => {
    if (interest === '#cccccc') {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/interests/${detailId.postId}`,
          {},
          {
            headers: {
              authorization: `Bearer ${localStorage.accessToken}`,
            },
          }
        )
        .then((res) => {})
        .catch((err) => {
          dispatch(setConfirmModal(true, '로그인 후 이용가능 합니다.'));
        });
    } else {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/interests/${detailId.postId}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.accessToken}`,
            },
          }
        )
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const checkLoginStatus = (callback) => {
    if (isLogin) {
      callback();
    } else {
      dispatch(setConfirmModal(true, '로그인 후 이용가능 합니다.'));
    }
    return;
  };
  return (
    <div className="postUserInfo">
      <div className="postUserInfo-img">
        <img
          className="profile"
          src={isImg !== null ? isImg : '/images/default-profile.jpg'}
        ></img>
      </div>
      <p className="postNickname">{nickname}</p>
      <div className="postUserInfo-container">
        <div
          className="postClick"
          onClick={() => {
            checkLoginStatus(() => {
              dispatch(createRoom(authorId));
              setTimeout(() => {
                dispatch(getRooms());
                history.push(`/chatlist`);
              }, 500);
            });
          }}
        >
          <i className="far fa-comment-dots" style={{ color: '#56d0a0' }} />
          채팅하기
        </div>
        <div className="postClick">
          <i
            className="fas fa-thumbs-up"
            style={{ color: interest }}
            onClick={changeInterest}
          />
          관심추가
        </div>
        <div>
          <i className="far fa-eye" style={{ color: '#85878a' }}></i>
          {view}
        </div>
      </div>
    </div>
  );
};

export default PostUserInfo;
