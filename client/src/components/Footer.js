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
          Co’ding + to’gether’을 합친 단어로
          <br /> 함께하는 코딩을 추구하는 웹 서비스입니다.
        </p>
      </div>
      <div>
        CONTACT
        <p
          className="footer-contact"
          onClick={() => {
            dispatch(setRequireModal(true));
          }}
        >
          서비스평가
        </p>
      </div>
      <div>
        ABOUT US
        <p>깃헙 레포지토리</p>
      </div>
      <div className="members-box">
        TEAM MEMBERS
        <div className="members">
          <p>박세희</p>
          <p>임정명</p>
          <p>한은태</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
