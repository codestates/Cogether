import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import Editor from '../components/EditorComponent';
import LanguageSelect from '../components/LanguageSelect';
import PostUserInfo from '../components/PostUserInfo';
import Comment from '../components/Comment';
import {
  setQuarterModal,
  setConfirmModal,
  setPostDelete,
  setPostId,
  setUserDelete,
} from '../actions';
import axios from 'axios';
import '../scss/Post.scss';

const Post = () => {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
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
  const [view, setView] = useState();
  const [isRead, setIsRead] = useState(true);
  const [isImg, setIsimg] = useState('');

  // get post detail successed -- 비회원이거나 글쓴이가 아니거나
  //"get author's post detail successed" --내가 쓴글

  const [comments, setComments] = useState();
  const [visitId, setVisitId] = useState('');
  const [isInterest, setIsInterest] = useState();
  const [authorId, setAuthorId] = useState();
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
        console.log('data', res);
        setPostStackNumber(res.data.stacks);
        setPostDate(data.updatedAt);
        setPostNickname(data.User.nickname);
        setIsimg(data.User.image);
        setIsinterest(data.totalInterests);
        setView(data.totalViews);
        setVisitId(res.data.visitorId);
        setIsInterest(res.data.isInterest);
        setAuthorId(data.userId);
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
        console.log('댓글', res);
        const { data: comment } = res.data;
        setComments(comment);
      })
      .catch((err) => {
        console.log('댓글실패');
      });
  };

  const uploadComment = (isComment) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/comments/${detailId.postId}`,
        {
          comment: isComment,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.accessToken}`,
          },
        }
      )
      .then((res) => {
        const { data: comment } = res.data;
        setComments([...comments, comment]);
        console.log('comment', comment);
      })
      .catch((err) => {
        console.log('실패');
        console.log(err);
        dispatch(setConfirmModal(true, '로그인 후 이용가능 합니다.'));
      });
  };

  const deleteComment = (data) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/comments/${data}`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        commentList();
      })
      .catch((err) => {
        console.log('실패');
      });
  };

  //수정버튼 클릭
  const editWrite = () => {
    history.push(`/write/${detailId.postId}`);
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
      postStack.push('MySQL');
    }
  });
  //삭제 버튼 클릭
  const deletePost = () => {
    dispatch(setPostId(`${detailId.postId}`));
    dispatch(setUserDelete(false));
    dispatch(setPostDelete(true));
    dispatch(setQuarterModal(true, '게시물을 삭제 하시겠습니까?'));
  };

  const Postlist = () => {
    history.push('/');
  };

  return (
    <div className="post" ref={containerRef}>
      <div className="postContainer">
        <section className="postHeader">
          <div className="postTitle">{postTitle}</div>
        </section>
        <section className="postControl">
          <div className="postControl-btn">
            {isAuthor ? (
              <button className="postedit" onClick={editWrite}>
                수정
              </button>
            ) : null}
            {isAuthor ? (
              <button className="postdelete" onClick={deletePost}>
                삭제
              </button>
            ) : null}
            <button className="postlist" onClick={Postlist}>
              목록
            </button>
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
            isImg={isImg}
            view={view}
            detailId={detailId}
            isInterest={isInterest}
            authorId={authorId}
          />
        </div>

        <div className="postComment">
          <Comment
            comments={comments}
            uploadComment={uploadComment}
            visitId={visitId}
            deleteComment={deleteComment}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
