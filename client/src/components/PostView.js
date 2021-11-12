import React from 'react';
import '../scss/PostView.scss';

const PostView = () => {
  return (
    <div className='postView'>
      <button
        onClick={() =>
          window.scrollTo({ top: 966, left: 0, behavior: 'smooth' })
        }
      >
        지금 팀원 구하러 가기
      </button>
    </div>
  );
};

export default PostView;
