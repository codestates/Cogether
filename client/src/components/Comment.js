import React, { useState, useRef } from 'react';
import '../scss/comment.scss';
import axios from 'axios';

const Comment = ({ comments, uploadComment, visitId, deleteComment }) => {
  const [isComment, setIsComment] = useState('');
  const inputRef = useRef();

  const comment = () => {
    setIsComment(inputRef.current.value);
  };
  const handleUpload = () => {
    uploadComment(isComment);
    inputRef.current.value = '';
    setIsComment('');
  };

  return (
    <div className="commentContainer">
      {comments?.map((data, i) => {
        return (
          <div key={i} className="comment">
            <div className="comment-img">
              <img
                className="profile"
                src={
                  data.User.image === null
                    ? '/images/default-profile.jpg'
                    : data.User.image
                }
              ></img>
            </div>
            <p>{data.User.nickname}</p>
            <p>{data.createdAt}</p>
            <div className="comment-container">
              <p>{data.comment}</p>
            </div>
            {data.userId === visitId ? (
              <i
                className="fas fa-trash-alt"
                onClick={() => deleteComment(data.id)}
              ></i>
            ) : null}
          </div>
        );
      })}
      <textarea
        ref={inputRef}
        placeholder="댓글을 남겨주세요"
        onChange={comment}
      />
      <div className="postComment-btn">
        <button onClick={handleUpload}>댓글 달기</button>
      </div>
    </div>
  );
};

export default Comment;
