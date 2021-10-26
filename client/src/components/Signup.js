import React from 'react'
import '../scss/Signup.scss';

const Signup = () => {
  return (
    <div className='SignupMain'>
      <form className='SignupForm'>
        <p className='SignupP'>
          이메일<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input placeholder='이메일'></input>
        </label>
        <p className='SignupP'>
          비밀번호<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input placeholder='비밀번호'></input>
        </label>
        <p className='SignupP'>
          비밀번호 확인<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input placeholder='비밀번호 확인'></input>
        </label>
        <p className='SignupP'>
          닉네임<span>(필수)</span>
        </p>
        <label className='SignupLabel'>
          <input placeholder='닉네임'></input>
        </label>
        <button className='SignupBtn' type='submit'>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
