import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  setIsGoogleLogin,
  setIsLogin,
  setConfirmModal,
} from '../actions/index';
import '../scss/Mypage.scss';

const Mypage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
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
        console.log('로그아웃 성공');
        history.push('/');
      })
      .catch((err) => {
        console.log('로그아웃 실패');
      });
  };
  return (
    <div className="MypageMain" onClick={toggleClass}>
      {' '}
      마이페이지
      <ul className={isActive ? 'mypage-menu active' : 'mypage-menu'}>
        <Link to="/setting" style={{ textDecoration: 'none' }}>
          <li className="userInfo">회원정보 수정</li>
        </Link>
        <li>채팅목록</li>
        <li>채팅방</li>
        <li className="logout" onClick={logOutHandler}>
          로그아웃
        </li>
      </ul>
    </div>
  );
};

export default Mypage;
