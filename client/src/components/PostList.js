import axios from 'axios';
import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';

const PostList = () => {
  const history = useHistory();
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        console.log('정상');
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  posts?.map((data) => {
    console.log(typeof data.mainstack);
  });

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
    history.push(`/post/${index}`);
    // window.location.replace(`/post/${index}`);
  };
  return (
    <div className="postMain">
      <ul className="postList">
        <li>최신</li>
        <li>인기</li>
      </ul>
      {/* <div className="postList-img">
        <img className="nodataImg" src="./images/No_data.svg"></img>
      </div> */}
      <div className="postList-main">
        {posts?.map((data) => {
          return (
            <div key={data.id} className="postList-box">
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
                  <p>{data?.totalComments}</p>
                  <p>{data?.totalInterests}</p>
                  <p>{data?.totalViews}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
