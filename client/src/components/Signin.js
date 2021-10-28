import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../Url';
import { setIsLogin, setSigninModal, setConfirmModal } from '../actions/index';
import { useDispatch } from 'react-redux';
import '../scss/Signin.scss';

const Signin = ({ variation }) => {
  const dispatch = useDispatch();
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
    axios
      .post(`${URL}/users/signin`, {
        email,
        password,
      })
      .then((res) => {
        console.log('이게 레스야', res);
        const { accessToken } = res.data.data;
        dispatch(setIsLogin(true));
        localStorage.setItem('accessToken', accessToken);
        dispatch(setSigninModal(false));
        console.log('로그인 성공');
      })
      .catch((err) => {
        console.log('에러인가?', err.response);
        if (err.response.data.message === 'user is not exist') {
          dispatch(setConfirmModal(true, '가입되어 있는 이메일이 아닙니다'));
        }
        if (err.response.data.message === 'wrong password') {
          dispatch(setConfirmModal(true, '비밀번호가 다릅니다.'));
        }
        console.log('실패');
      });
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
        <div className="SigninCompoSignup">
          <label>회원이 아니신가요?</label>
          <span onClick={variation}>회원가입</span>
        </div>
      </form>
      <button className="SigninGoogle" type="submit">
        구글 로그인
      </button>
    </div>
  );
};

export default Signin;
