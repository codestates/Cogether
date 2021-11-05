import React from 'react';
import '../scss/comment.scss';
const Comment = () => {
  return (
    <div className="comment">
      <div className="comment-img">
        <img className="profile" src="/images/default-profile.jpg"></img>
      </div>
      <p>닉네임</p>
      <div className="comment-container">
        <p>댓글</p>
      </div>
    </div>
  );
};

export default Comment;
