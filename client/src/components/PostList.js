import React from 'react'

const PostList = () => {
  return (
    <>
      <ul className="postList">
        <li>최신</li>
        <li>인기</li>
      </ul>
      <div className="postList-img">
        <img src="./images/No_data-removebg-preview.png"></img>
      </div>
    </>
  )
}

export default PostList
