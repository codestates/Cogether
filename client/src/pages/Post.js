import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Editor from '../components/EditorComponent';
import LanguageSelect from '../components/LanguageSelect';
import PostUserInfo from '../components/PostUserInfo';
import Comment from '../components/Comment';
import axios from 'axios';
import '../scss/Post.scss';

const Post = () => {
  const postId = useParams();
  const [detailId, setDetailId] = useState(postId);
  const [language, setLanguage] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postStackNumber, setPostStackNumber] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [postEdit, setPostEdit] = useState(true);
  const [postDate, setPostDate] = useState('');
  const [postNickname, setPostNickname] = useState('');
  const [isAuthor, setIsAuthor] = useState(false);
  const [isinterest, setIsinterest] = useState('');
  let postStack = [];
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${detailId.postId}`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}` || null,
        },
      })
      .then((res) => {
        const data = res.data.data;
        setPostTitle(data.title);
        setPostContent(data.content);
        console.log(data);
        setPostStackNumber(res.data.stacks);
        setPostDate(data.updatedAt);
        setPostNickname(data.nickname);
        setIsinterest(data.totalInterests);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const editWrite = () => {};

  postStackNumber?.map((data) => {
    console.log(data);
    if (data === 1) {
      postStack.push('JavaScript');
    }
    if (data === 2) {
      postStack.push('TypeScript');
    }
    if (data === 3) {
      postStack.push('React');
    }
    if (data === 4) {
      postStack.push('NodeJS');
    }
    if (data === 5) {
      postStack.push('Python');
    }
    if (data === 6) {
      postStack.push('Django');
    }
    if (data === 7) {
      postStack.push('C');
    }
    if (data === 8) {
      postStack.push('Java');
    }
    if (data === 9) {
      postStack.push('SQL');
    }
  });
  console.log(postStack);
  return (
    <div className="post">
      <div className="postContainer">
        <section className="postHeader">
          <div className="postTitle">{postTitle}</div>
        </section>
        <section className="postControl">
          <div className="postControl-btn">
            {isAuthor ? <button onClick={editWrite}>수정</button> : null}
            {isAuthor ? <button>삭제</button> : null}
          </div>

          <span>{postDate.substring(0, 10)}</span>
        </section>

        <div className="postLanguages">
          <h2>사용 언어 : </h2>
          <div className="postLanguages-view">
            {postStack.map((stack) => {
              return <div>{stack}</div>;
            })}
          </div>
          <div className="postLanguages-edit">
            <LanguageSelect setLanguage={setLanguage} />
          </div>
        </div>

        <div className="postEditor">
          <Editor value={postContent} postEdit={postEdit} />
        </div>
        <div className="postUser">
          <PostUserInfo nickname={postNickname} interestCount={isinterest} />
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
