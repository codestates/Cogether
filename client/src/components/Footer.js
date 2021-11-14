import React from 'react';
import { useDispatch } from 'react-redux';
import { setRequireModal } from '../actions/index';
import '../scss/Footer.scss';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          className="footer-img-full"
          src="./images/logo_cogether-removebg-preview.png"
        ></img>
        <img
          className="footer-logo-small"
          src="/images/favicon-removebg.png"
        ></img>
        <p>
          'Co'ding + to'gether'을 합친 단어로
          <br /> 함께하는 코딩을 추구하는 웹 서비스입니다.
        </p>
      </div>
      <div className="contact">
        <p>CONTACT</p>
        <p
          className="footer-contact"
          onClick={() => {
            dispatch(setRequireModal(true));
          }}
        >
          서비스평가
        </p>
      </div>
      <div className="aboutUs">
        <p>ABOUT US</p>
        <a href="https://github.com/codestates/Cogether">Our Repository</a>
      </div>
      <div className="members-box">
        <p>TEAM MEMBERS</p>
        <div className="members">
          <a href="https://github.com/Sehee-Park-93">Se hee</a>
          <a href="https://github.com/wjdaud107">Jung myeong</a>
          <a href="https://github.com/Hans160">Eun tae</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
