import React from 'react';
import { useDispatch } from 'react-redux';
import { setRequireModal } from '../actions/index';
import { Link } from 'react-router-dom';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          className="footer-img"
          src="./images/logo_cogether-removebg-preview.png"
        ></img>
        <p>
          Cogether는’
          <br />
          Co’ding + to’gether’을 합친 단어로
          <br /> 함께하는 코딩을 추구하는 웹 서비스입니다.
        </p>
      </div>
      <div>
        CONTACT
        <p
          onClick={() => {
            dispatch(setRequireModal(true));
          }}
        >
          서비스평가
        </p>
      </div>
      <div>
        ABOUT US
        <Link to="/post">
          <p>깃헙 레포지토리이지만 잠시 포스트 링크용 으로 테스트</p>
        </Link>
      </div>
      <div>
        TEAM MEMBERS
        <p>팀원소개</p>
      </div>
    </div>
  );
};

export default Footer;
