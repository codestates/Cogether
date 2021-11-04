import React from 'react';
import '../scss/postUserInfo.scss';

const PostUserInfo = () => {
  return (
    <div className="postUserInfo">
      <div className="postUserInfo-img">
        <img className="profile" src="./images/default-profile.jpg"></img>
      </div>
      <p className="postNickname">닉네임</p>
      <div className="postUserInfo-container">
        <p>채팅</p>
        <p>좋아요</p>
        <p>조회수</p>
      </div>
    </div>
  );
};

export default PostUserInfo;
