import React, { useState } from 'react';
import axios from 'axios';
import {
  setIsLogin,
  setSigninModal,
  setConfirmModal,
  setMessage,
  setIsGoogleLogin,
} from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import '../scss/Signin.scss';

const Signin = ({ variation }) => {
  const dispatch = useDispatch();
  const messageInfo = useSelector((state) => state.messageReducer);
  const { isMessage } = messageInfo;
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = (key) => (e) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = login;

    //email 또는 password 가 쓰여지지 않는경우
    if (!email && !password) {
      dispatch(setMessage('이메일과 비밀번호를 입력하세요.'));
    } else if (!password) {
      dispatch(setMessage('비밀번호를 입력하세요.'));
    } else if (!email) {
      dispatch(setMessage('이메일을 입력하세요'));
    }

    if (email && password) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/signin`, {
          email,
          password,
        })
        .then((res) => {
          const { accessToken } = res.data.data;
          dispatch(setIsLogin(true));
          localStorage.setItem('accessToken', accessToken);
          dispatch(setSigninModal(false));
          dispatch(setConfirmModal(true, '로그인에 성공 하셨습니다.'));
        })
        .catch((err) => {
          if (err.response.data.message === 'user is not exist') {
            dispatch(setConfirmModal(true, '가입되어 있는 이메일이 아닙니다'));
            dispatch(setSigninModal(false));
          }
          if (err.response.data.message === 'wrong password') {
            dispatch(setConfirmModal(true, '비밀번호가 다릅니다.'));
            dispatch(setSigninModal(false));
          }

          console.log(err);
        });
    }
  };
  const oAuthHandler = () => {
    console.log('구글버튼 클릭');
    window.location.assign(
      `${process.env.REACT_APP_API_URL}/users/oauth/login`
    );
    dispatch(setSigninModal(false));
    dispatch(setIsLogin(true));
    dispatch(setIsGoogleLogin(true));
  };

  return (
    <div className="SigninMain">
      <form className="SigninForm" onSubmit={handleLogin}>
        <p className="SigninP">이메일</p>
        <label className="SigninLabel">
          <input
            placeholder="이메일"
            type="email"
            onChange={handleInputValue('email')}
          ></input>
        </label>
        <p className="SigninP">비밀번호</p>
        <label className="SigninLabel">
          <input
            placeholder="비밀번호"
            type="password"
            onChange={handleInputValue('password')}
          ></input>
        </label>
        <button className="SigninBtn" type="submit">
          로그인
        </button>
        <span className="SigninAlert">{isMessage}</span>
        <div className="SigninCompoSignup">
          <label>회원이 아니신가요?</label>
          <span onClick={variation}>회원가입</span>
        </div>
      </form>
      <button className="SigninGoogle" onClick={oAuthHandler}>
        구글 로그인
      </button>
    </div>
  );
};

export default Signin;
