import React from 'react'
import '../scss/Signin.scss';

const Signin = ({ variation }) => {
    return (
        <div className='SigninMain'>
            <form className='SigninForm'>
                    <p className='SigninP'>이메일</p>
                    <label className='SigninLabel'>
                        <input placeholder='이메일'>
                        </input>
                    </label>
                    <p className='SigninP'>비밀번호</p>
                    <label className='SigninLabel'>
                        <input placeholder='비밀번호'>
                        </input>
                    </label>
                    <button className='SigninBtn' type='submit' >로그인</button>
                    <div className='SigninCompoSignup'>
                        <label>회원이 아니신가요?</label>
                        <span onClick={ variation }>회원가입</span>
                    </div>
            </form>
            <button className='SigninGoogle' type='submit'>구글 로그인</button>
        </div>
    )
};

export default Signin;
