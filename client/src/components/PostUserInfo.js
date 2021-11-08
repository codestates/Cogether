import React, { useState } from 'react';
import '../scss/postUserInfo.scss';

const PostUserInfo = ({ nickname, interestCount, isImg, view }) => {
  const [interest, setInterest] = useState('#cccccc');
  const changeInterest = () => {
    interest === '#56d0a0' ? setInterest('#cccccc') : setInterest('#56d0a0');
  };

  return (
    <div className="postUserInfo">
      <div className="postUserInfo-img">
        <img
          className="profile"
          src={isImg !== null ? isImg : '/images/default-profile.jpg'}
        ></img>
      </div>
      <p className="postNickname">{nickname}</p>
      <div className="postUserInfo-container">
        <div>
          <i className="far fa-comment-dots" style={{ color: '#56d0a0' }} />
          채팅하기
        </div>
        <div>
          <i
            className="fas fa-thumbs-up"
            style={{ color: interest }}
            onClick={changeInterest}
          />
          {interestCount}
        </div>
        <div>
          <i className="far fa-eye" style={{ color: '#85878a' }}></i>
          {view}
        </div>
      </div>
    </div>
  );
};

export default PostUserInfo;
