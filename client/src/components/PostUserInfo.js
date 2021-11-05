import React, { useState } from 'react';
import '../scss/postUserInfo.scss';

const PostUserInfo = ({ nickname, interestCount }) => {
  const [interest, setInterest] = useState('#cccccc');
  const changeInterest = () => {
    interest === '#d62d20' ? setInterest('#cccccc') : setInterest('#d62d20');
  };
  return (
    <div className="postUserInfo">
      <div className="postUserInfo-img">
        <img className="profile" src="/images/default-profile.jpg"></img>
      </div>
      <p className="postNickname">{nickname}</p>
      <div className="postUserInfo-container">
        <div>
          <i
            className="fas fa-comment-dots fa-lg"
            style={{ color: '#56d0a0' }}
          />
          채팅하기
        </div>
        <div>
          <i
            className="fas fa-heart fa-lg"
            style={{ color: interest }}
            onClick={changeInterest}
          />
          {interestCount}
        </div>
      </div>
    </div>
  );
};

export default PostUserInfo;
