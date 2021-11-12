import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  setIsGoogleLogin,
  setIsLogin,
  setUserInfo,
  setIsToggle,
  setIsActive,
  setConfirmModal,
} from '../actions/index';

import '../scss/Mypage.scss';

const Mypage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const Toggle = useSelector((state) => state.userReducer);
  const [action, setAction] = useState(false);
  const { isActive, istoggle } = Toggle;

  const toggleClass = () => {
    if (isActive === true && istoggle === true) {
      dispatch(setIsToggle(false));
      dispatch(setIsActive(false));
      setAction(!action);
    } else {
      dispatch(setIsToggle(true));
      dispatch(setIsActive(true));
      setAction(!action);
    }
  };

  const logOutHandler = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/signout`,
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.accessToken}`,
          },
        }
      )
      .then((res) => {
        localStorage.setItem('accessToken', null);
        dispatch(setIsLogin(false));
        dispatch(setIsGoogleLogin(false));
        dispatch(setUserInfo({}));
        dispatch(setConfirmModal(true, '로그아웃 되었습니다.'));
        history.push('/');
      })
      .catch((err) => {});
  };
  return (
    <div className="MypageMain" onClick={toggleClass}>
      {action ? <div className="fullBox"></div> : null}
      마이페이지
      <ul className={isActive ? 'mypage-menu active' : 'mypage-menu'}>
        <Link to="/setting" style={{ textDecoration: 'none' }}>
          <li className="userInfo">회원 정보 수정</li>
        </Link>
        <Link to="/chatlist" style={{ textDecoration: 'none' }}>
          <li className="chatting">채팅 목록</li>
        </Link>
        <li className="logout" onClick={logOutHandler}>
          로그아웃
        </li>
      </ul>
    </div>
  );
};

export default Mypage;
