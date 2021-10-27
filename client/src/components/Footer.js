import React from 'react';

const Footer = () => {
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
        <p>서비스평가</p>
      </div>

      <div>
        ABOUT US
        <p>깃헙 레포지토리</p>
      </div>

      <div>
        TEAM MEMBERS
        <p>팀원소개</p>
      </div>
    </div>
  );
};

export default Footer;
