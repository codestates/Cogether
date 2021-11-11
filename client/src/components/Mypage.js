import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setIsGoogleLogin, setIsLogin, setUserInfo } from '../actions/index';
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
        dispatch(setUserInfo({}));
        history.push('/');
      })
      .catch((err) => {});
  };
  return (
    <div className='MypageMain' onClick={toggleClass}>
      {' '}
      마이페이지
      <ul className={isActive ? 'mypage-menu active' : 'mypage-menu'}>
        <Link to='/setting' style={{ textDecoration: 'none' }}>
          <li className='userInfo'>회원 정보 수정</li>
        </Link>
        <Link to='/chatlist' style={{ textDecoration: 'none' }}>
          <li>채팅 목록</li>
        </Link>
        <li className='logout' onClick={logOutHandler}>
          로그아웃
        </li>
      </ul>
    </div>
  );
};

export default Mypage;
