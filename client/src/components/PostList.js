import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { setStack } from '../actions';

const PostList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const Stack = useSelector((state) => state.userReducer);
  const { isStack, isLogin } = Stack;
  const [posts, setPosts] = useState();
  useEffect(() => {
    recentPosts();
    dispatch(setStack(''));
  }, []);

  //Stack에 따른 리스트 관리
  const getFields = (input, field) => {
    let output = [];
    for (let i = 0; i < input.length; ++i) output.push(input[i][field]);
    return output;
  };

  useEffect(() => {
    if (isStack !== '') {
      axios
        .get(`${process.env.REACT_APP_API_URL}/posts/hashtags/${isStack}`)
        .then((res) => {
          let result = getFields(res.data.data, 'Post');
          setPosts(result);
          dispatch(setStack(''));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isStack]);

  function reducer(state = '', action) {
    switch (action) {
      case 1:
        return (state = './images/languages/javascript.png');
      case 2:
        return (state = './images/languages/typescript.png');
      case 3:
        return (state = './images/languages/react.png');
      case 4:
        return (state = './images/languages/nodejs.png');
      case 5:
        return (state = './images/languages/python.png');
      case 6:
        return (state = './images/languages/go.png');
      case 7:
        return (state = './images/languages/c.png');
      case 8:
        return (state = './images/languages/java.png');
      case 9:
        return (state = './images/languages/sql.png');
      default:
        return state;
    }
  }

  const postDtail = (index) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/posts/totalviews/${index}`)
      .then((res) => {
        history.push(`/post/${index}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const recentPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setPosts();
      });
  };

  const myPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/myposts`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setPosts();
      });
  };

  const hotPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/hotposts`)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setPosts();
      });
  };

  const myInterest = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/interests`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        let result = getFields(res.data.data, 'Post');
        setPosts(result);
      })
      .catch((err) => {
        console.log(err);
        setPosts();
      });
  };
  console.log(posts);
  return (
    <div className="postMain">
      {isLogin ? (
        <ul className="postList">
          <li onClick={recentPosts}>
            <i className="far fa-clock"></i>
            <span>최신</span>
          </li>
          <li onClick={hotPosts}>
            <i className="fab fa-hotjar"></i>
            <span>인기</span>
          </li>
          <li onClick={myInterest}>
            <i className="fas fa-clipboard-check"></i>
            <span>관심</span>
          </li>
          <li onClick={myPosts}>
            <i className="fas fa-portrait"></i>
            <span>내 글</span>
          </li>
        </ul>
      ) : (
        <ul className="postList">
          <li>
            <i className="far fa-clock"></i>
            최신
          </li>
          <li>
            <i className="fab fa-hotjar"></i>
            인기
          </li>
        </ul>
      )}

      {/* <div className="postList-img">
        <img className="nodataImg" src="./images/No_data.svg"></img>
      </div> */}
      <div className="postList-main">
        {!posts ? (
          <div className="nodata">
            <h2>게시글이 없습니다.</h2>
            {/* <img src="/images/No_data.svg"></img> */}
          </div>
        ) : (
          posts?.map((data, ind) => {
            return data !== null ? (
              <div key={ind} className="postList-box">
                <div
                  className="postListContainer"
                  onClick={() => postDtail(data.id)}
                >
                  <div className="postList-title">
                    <p>{data?.title}</p>
                  </div>
                  <div className="postList-img">
                    <img src={reducer('', data?.mainstack)} />
                  </div>
                  <div className="postListContainer-bottom">
                    <div className="list-bottom">
                      <i
                        className="far fa-comment-dots"
                        style={{ color: '#56d0a0' }}
                      />
                      <p>{data?.totalComments}</p>
                    </div>
                    <div className="list-bottom">
                      <i
                        className="fas fa-thumbs-up"
                        style={{ color: '#5f7db7' }}
                      />
                      <p>{data?.totalInterests}</p>
                    </div>
                    <div className="list-bottom">
                      <i
                        className="far fa-eye"
                        style={{ color: '#85878a' }}
                      ></i>
                      <p>{data?.totalViews}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  );
};

export default PostList;
