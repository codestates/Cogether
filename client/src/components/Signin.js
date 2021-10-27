import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../Url';
import '../scss/Signin.scss';

const Signin = ({ variation }) => {
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
        console.log('로그인 성공');
      })
      .catch((err) => {
        console.log('로그인 실패');
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
