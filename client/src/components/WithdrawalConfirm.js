import React from 'react';
import '../scss/WithdrawalConfirm.scss';

const WithdrawalConfirm = () => {
  return (
    <div className="WithdrawalConfirmMain">
      <div className="WithdrawalConfirmHeader">
        회원 탈퇴 시 게시물 관리에 대한 권한이 사라집니다 정말 탈퇴
        하시겠습니까?
      </div>
      <div className="WithdrawalConfirmFooter">
        <button>확인</button>
        <button>나가기</button>
      </div>
    </div>
  );
};

export default WithdrawalConfirm;
