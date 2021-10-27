import React from 'react';
import '../scss/PostdeleteConfirm.scss';

const PostdeleteConfirm = () => {
  return (
    <div className="PostdeleteConfirmMain">
      <div className="PostdeleteConfirmHeader">게시글을 삭제하시겠습니까?</div>
      <div className="PostdeleteConfirmFooter">
        <button>확인</button>
        <button>나가기</button>
      </div>
    </div>
  );
};

export default PostdeleteConfirm;
