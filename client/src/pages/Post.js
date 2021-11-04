import React, { useState } from 'react';
import Editor from '../components/EditorComponent';
import LanguageSelect from '../components/LanguageSelect';
import PostUserInfo from '../components/PostUserInfo';
import Comment from '../components/Comment';
import '../scss/Post.scss';

const Post = () => {
  const [language, setLanguage] = useState('');
  return (
    <div className="post">
      <div className="postContainer">
        <section className="postHeader">
          <div className="postTitle">프로젝트 인원을 구합니다.</div>
        </section>
        <section className="postControl">
          <div className="postControl-btn">
            <button>수정</button>
            <button>삭제</button>
          </div>
          <span>2021-11-02</span>
        </section>

        <div className="postLanguages">
          <h2>사용 언어 : </h2>
          <LanguageSelect setLanguage={setLanguage} />
        </div>

        <div className="postEditor">
          <Editor />
        </div>
        <div className="postUser">
          <PostUserInfo />
        </div>

        <div className="postComment">
          <Comment />
          <textarea placeholder="댓글을 남겨주세요" />
          <div className="postComment-btn">
            <button>댓글 달기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
