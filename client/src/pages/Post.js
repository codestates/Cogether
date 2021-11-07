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
  const [isRead, setIsRead] = useState(true);
  const [isImg, setIsimg] = useState('');
  const [isComment, setIsComment] = useState('');
  // get post detail successed -- 비회원이거나 글쓴이가 아니거나
  //"get author's post detail successed" --내가 쓴글

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
        setIsimg(data.image);
        setIsinterest(data.totalInterests);
        console.log('메시지', res.data.message);
        res.data.message === "get author's post detail successed"
          ? setIsAuthor(true)
          : setIsAuthor(false);
      })
      .catch((err) => {
        console.log(err);
      });

    commentList();
  }, []);
  // 댓글리스트 불러오기
  const commentList = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comments/${detailId.postId}`)
      .then((res) => {
        console.log('댓글성공');
      })
      .catch((err) => {
        console.log('댓글실패');
      });
  };

  //수정버튼 클릭
  const editWrite = () => {};

  //댓글
  const comment = (e) => {
    setIsComment(e.target.value);
  };
  const commentPush = () => {
    console.log(isComment);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/comments/${detailId.postId}`,
        {
          comment: isComment,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.accessToken}` || null,
          },
        }
      )
      .then((res) => {
        console.log('성공');
        // console.log(res)
      })
      .catch((err) => {
        console.log('실패');
        // console.log(err)
      });
  };
  postStackNumber?.map((data) => {
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
            {postStack.map((stack, idx) => {
              return <div key={idx}>{stack}</div>;
            })}
          </div>
          <div className="postLanguages-edit">
            <LanguageSelect setLanguage={setLanguage} />
          </div>
        </div>

        <div className="postEditor">
          <Editor
            value={postContent || ''}
            postEdit={postEdit}
            isRead={isRead}
          />
        </div>
        <div className="postUser">
          <PostUserInfo
            nickname={postNickname}
            interestCount={isinterest}
            isImg={isImg}
          />
        </div>

        <div className="postComment">
          <Comment />
          <textarea
            placeholder="댓글을 남겨주세요"
            onChange={comment}
            value={isComment}
          />
          <div className="postComment-btn">
            <button onClick={commentPush}>댓글 달기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
