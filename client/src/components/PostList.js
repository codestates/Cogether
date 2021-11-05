import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PostList = () => {
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
  console.log(posts);
  return (
    <>
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
            <div className="postList-box">
              <div key={data.id} className="postListContainer">
                <div>
                  <p>{data?.title}</p>
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
    </>
  );
};

export default PostList;
