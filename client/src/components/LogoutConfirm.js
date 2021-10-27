import React from 'react';
import '../scss/LogoutConfirm.scss';

const LogoutConfirm = () => {
  return (
    <div className="LogoutConfirmMain">
      <div className="LogoutConfirmHeader">로그아웃 하시겠습니까?</div>
      <div className="LogoutConfirmFooter">
        <button>확인</button>
        <button>나가기</button>
      </div>
    </div>
  );
};

export default LogoutConfirm;
