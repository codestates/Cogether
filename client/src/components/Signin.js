import React, { useState } from 'react';
import axios from 'axios';
import {
  setIsLogin,
  setSigninModal,
  setConfirmModal,
  setIsGoogleLogin,
  setUserInfo,
} from '../actions/index';
import { useDispatch } from 'react-redux';
import '../scss/Signin.scss';

const Signin = ({ variation }) => {
  const dispatch = useDispatch();
  const [eailMessage, setEailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const handleInputValue = (key) => (e) => {
    setLogin({ ...login, [key]: e.target.value });
  };
  const validation = () => {
    const { email, password } = login;

    if (!email && !password) {
      setEailMessage('이메일을 입력하세요.');
      setPasswordMessage('비밀번호를 입력하세요.');
    } else if (!password) {
      setEailMessage('');
      setPasswordMessage('비밀번호를 입력하세요.');
    } else if (!email) {
      setEailMessage('이메일을 입력하세요');
      setPasswordMessage('');
    } else {
      setEailMessage('');
      setPasswordMessage('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = login;

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
          dispatch(setConfirmModal(true, '로그인 되었습니다.'));
          dispatch(setSigninModal(false));
          dispatch(setUserInfo(res.data.data));
        })
        .catch((err) => {
          if (err.response.data.message === 'user is not exist') {
            dispatch(setConfirmModal(true, '가입되어 있지 않은 이메일입니다.'));
          }
          if (err.response.data.message === 'wrong password') {
            dispatch(setConfirmModal(true, '비밀번호가 일치하지 않습니다.'));
          }

          console.log(err);
        });
    }
  };
  const oAuthHandler = () => {
    window.location.assign(
      `${process.env.REACT_APP_API_URL}/users/oauth/login`
    );
    dispatch(setSigninModal(false));
    dispatch(setIsLogin(true));
    dispatch(setIsGoogleLogin(true));
  };
  return (
    <div className='SigninMain'>
      <form className='SigninForm' onSubmit={handleLogin}>
        <p className='SigninP'>Email</p>
        <label className='SigninLabel'>
          <input
            placeholder='email'
            type='email'
            onChange={handleInputValue('email')}
            onKeyUp={validation}
          ></input>
          <span className='SigninAlert'>{eailMessage}</span>
        </label>

        <p className='SigninP'>Password</p>
        <label className='SigninLabel'>
          <input
            placeholder='password'
            type='password'
            onChange={handleInputValue('password')}
            onKeyUp={validation}
          ></input>
          <span className='SigninAlert'>{passwordMessage}</span>
        </label>

        <button className='SigninBtn' type='submit'>
          로그인
        </button>
        <div className='SigninCompoSignup'>
          <label>회원이 아니신가요?</label>
          <span onClick={variation}>회원가입</span>
        </div>
      </form>
      <button className='SigninGoogle' onClick={oAuthHandler}>
        <img src='/images/btn_google_light_normal_ios.png' />
        Sign in with Google
      </button>
    </div>
  );
};

export default Signin;
