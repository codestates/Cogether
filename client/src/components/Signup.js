import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../Url';
import '../scss/Signup.scss';
import {} from '../actions/index';
import { setMessageModal } from '../actions';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  // const [nickMessage, setNickMessage] = useState();
  // const [passWordMessage, setPassWordMessage] = useState();
  // const [emailMessage, setEmailMessage] = useState();
  const handleInputValue = (key) => (e) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, nickname, password, passwordCheck } = user;
    axios
      .post(
        `${URL}/users/signup`,
        {
          email: email,
          nickname: nickname,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log('회원가입에 성공했습니다.');
      })
      .catch((err) => {
        console.log('회원가입에 실패했습니다.');
      });
  };
  return (
    <div className="SignupMain">
      <form className="SignupForm" onSubmit={handleSubmit}>
        <p className="SignupP">
          이메일<span>(필수)</span>
        </p>
        <label className="SignupLabel">
          <input
            placeholder="이메일"
            type="email"
            onChange={handleInputValue('email')}
          ></input>
        </label>
        <p className="SignupP">
          닉네임<span>(필수)</span>
        </p>
        <label className="SignupLabel">
          <input
            placeholder="닉네임"
            type="text"
            onChange={handleInputValue('nickname')}
          ></input>
        </label>
        <p className="SignupP">
          비밀번호<span>(필수)</span>
        </p>
        <label className="SignupLabel">
          <input
            placeholder="비밀번호"
            type="password"
            onChange={handleInputValue('password')}
            placeholder="password"
          ></input>
        </label>
        <p className="SignupP">
          비밀번호 확인<span>(필수)</span>
        </p>
        <label className="SignupLabel">
          <input
            placeholder="비밀번호 확인"
            type="password"
            onChange={handleInputValue('passwordCheck')}
          ></input>
        </label>
        <button className="SignupBtn" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
