import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSigninModal, setConfirmModal } from '../actions/index';
import '../scss/Modal.scss';
import Signin from './Signin';
import Signup from './Signup';

const SigninModal = () => {
  const SigninInfo = useSelector((state) => state.userReducer);
  const confirm = useSelector((state) => state.messageReducer);
  const { confirmModal } = confirm;
  const { isSigninModalOpen } = SigninInfo;
  const [isSignin, setIsSignin] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfirmModal(false, ''));
  }, []);
  const closeModal = () => {
    dispatch(setSigninModal(false));
    setIsSignin(true);
  };
  const HandlerSignin = () => {
    setIsSignin(!isSignin);
  };

  return (
    <>
      {isSigninModalOpen ? (
        <div className="SigninModal">
          <div className="ModalMain" onClick={closeModal} />
          <div className={confirmModal.isOpen ? 'ModalBox-block' : 'ModalBox'}>
            <>
              {isSignin ? (
                <Signin variation={HandlerSignin} />
              ) : (
                <Signup variation={HandlerSignin} />
              )}
            </>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SigninModal;
Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Hans160 
Hans160
/
Cogether
Private
forked from codestates/Cogether
0
0
3
Code
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Cogether/client/src/components/Signup.js /
@Sehee-Park-93
Sehee-Park-93 Merge branch 'dev' into feature8
Latest commit cf9f57c 5 days ago
 History
 3 contributors
@Sehee-Park-93@wjdaud107@Hans160
182 lines (167 sloc)  5.22 KB
  
import React, { useState } from 'react';
import axios from 'axios';
import '../scss/Signup.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  setConfirmModal,
  setEmailMessage,
  setNicknameMessage,
  setPasswordMessage,
} from '../actions/index';

const Signup = ({ variation }) => {
  const dispatch = useDispatch();
  const messageInfo = useSelector((state) => state.messageReducer);
  const { emailMessage, passwordMessage, nicknameMessage } = messageInfo;
  const [user, setUser] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const validateNickname = (nickname) => {
    const min = 1;
    const regNickname = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9a-z]+$/;

    // 이름 길이 확인
    if (nickname.length < min) {
      dispatch(setNicknameMessage('1자 이상 입력해주세요'));
      return false;
    }

    // 이름 정규식 확인
    if (!regNickname.test(nickname)) {
      dispatch(setNicknameMessage('한글 / 영문 소문자 / 숫자만 허용합니다'));
      return false;
    } else {
      dispatch(setNicknameMessage());
      return true;
    }
  };

  const validateEmail = (email) => {
    const regEmail = /^[0-9a-z-_.]+@[0-9a-z]+\.[0-9a-z]+$/;

    if (email.length === 0) {
      dispatch(setEmailMessage('1자 이상 입력해주세요'));
    } else if (!regEmail.test(email)) {
      dispatch(setEmailMessage('특수문자(-_.) 또는 이메일형식(@) 필요합니다'));
      return false;
    } else {
      dispatch(setEmailMessage());
      return true;
    }
  };

  const validatePassword = (password, passwordCheck) => {
    const min = 4;
    const max = 20;
    const regPassword = /^[0-9a-z-_.!?*]+$/;

    if (password !== passwordCheck) {
      dispatch(setPasswordMessage('동일한 비밀번호를 입력해 주세요'));
      return false;
    }

    // 비밀번호 길이 확인
    if (password.length < min || password.length > max) {
      dispatch(setPasswordMessage('비밀번호 4~20자 입니다'));
      return false;
    }

    // 비밀번호 정규식 확인
    if (!regPassword.test(password)) {
      dispatch(
        setPasswordMessage('영문 소문자/숫자/특수문자(-_.!?*)만 허용합니다')
      );
      return false;
    } else {
      dispatch(setPasswordMessage(''));
      return true;
    }
  };

  const handleInputValue = (key) => (e) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, nickname, password, passwordCheck } = user;

    const validNickname = validateNickname(nickname);
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password, passwordCheck);

    if (validNickname & validEmail & validPassword) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/users/signup`,
          {
            email: email,
            nickname: nickname,
            password: password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          dispatch(setConfirmModal(true, '회원가입에 성공하셨습니다'));
          console.log('확인모달');
          variation();
        })
        .catch((err) => {
          if (err.response.status === 409) {
            dispatch(setConfirmModal(true, '이미 가입되어 있는 이메일입니다.'));
          }
          if (err) throw err;
        });
    }
  };
  return (
    <div className='SignupMain'>
      <form className='SignupForm' onSubmit={handleSubmit}>
        <p className='SignupP'>
          이메일<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input
            placeholder='이메일'
            type='email'
            onChange={handleInputValue('email')}
          ></input>
        </label>
        <span className='SignupAlert'>{emailMessage}</span>
        <p className='SignupP'>
          닉네임<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input
            placeholder='닉네임'
            type='text'
            onChange={handleInputValue('nickname')}
          ></input>
        </label>
        <span className="SignupAlert">{nicknameMessage}</span>
        <p className="SignupP">
          비밀번호<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input
            placeholder='비밀번호'
            type='password'
            onChange={handleInputValue('password')}
            placeholder='password'
          ></input>
        </label>
        <p className='SignupP'>
          비밀번호 확인<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input
            placeholder='비밀번호 확인'
            type='password'
            onChange={handleInputValue('passwordCheck')}
          ></input>
        </label>
        <span className='SignupAlert'>{passwordMessage}</span>
        <button className='SignupBtn' type='submit'>
          회원가입
        </button>
      </form>
      <div className='BackSignup'>
        <label>계정이 있으신가요?</label>
        <span className='SigninFormBtn' onClick={variation}>
          로그인
        </span>
      </div>
    </div>
  );
};

export default Signup;
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete