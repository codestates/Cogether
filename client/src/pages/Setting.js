import React from 'react';
import '../scss/Setting.scss';
const Setting = () => {
  return (
    <div className="setting">
      <div className="setting-header">
        <h2>회원 정보수정</h2>
      </div>
      <div className="setting-img">
        <img className="profile" src="./images/default-profile.jpg"></img>
      </div>
      <div className="settig-profile">
        <button>프로필 사진 변경</button>
        <button>프로필 사진 제거</button>
      </div>
      <div className="settig-nickname">
        <p>닉네임 : </p>
        <input></input>
      </div>
      <div className="settig-password">
        <p>비밀번호 : </p>
        <input></input>
      </div>
      <div className="setting-userInfo">
        <button>변경 완료</button>
        <button>회원 탈퇴</button>
      </div>
    </div>
  );
};

export default Setting;
