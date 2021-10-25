import React from 'react'

const PostList = () => {
  return (
    <>
      <ul className="postList">
        <li>최신</li>
        <li>인기</li>
      </ul>
      <div className="postList-img">
        <img
          className="nodataImg" 
          src="./images/No_data.svg"
        ></img>
      </div>
    </>
  )
}

export default PostList
