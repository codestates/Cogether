import React from 'react';
import Editor from '../components/EditorComponent';
const Post = () => {
  return (
    <div className="PostContainer">
      <section className="PostHeader">
        <div className="PostTitle">프로젝트 인원을 구합니다.</div>
        <div className="PostControl">
          <button>수정</button>
          <button>삭제</button>
          <span>2021-11-02</span>
        </div>
        <div className="PostLanguages">
          <h2>사용 언어 : </h2>
        </div>
        <hr />
      </section>

      <div className="PostEditor">
        <Editor />
      </div>
      <div className="PostInfo">
        <div className="PostUserInfo">
          <div>사진</div>
          <div>닉네임</div>
        </div>
        <div className="PostWriteInfo">
          <div>바로 물어보기</div>
          <div>좋아요 횟수</div>
          <div>게시글 조회 횟수</div>
        </div>
      </div>
      <div className="PostComment">
        <input placeholder="댓글 작성하기" type="text"></input>
        <button>댓글등록</button>
      </div>
      <div>댓글들 달리는 창들</div>
    </div>
  );
};

export default Post;
