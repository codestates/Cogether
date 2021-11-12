import React from 'react';
import PostView from './PostView';

const MainImage = ({ contents, subcontents }) => {
  return (
    <div className="MainImageContainer">
      <img className="content-img" src="/images/pc.png" alt=""></img>
      <img className="iphone-img" src="/images/iphone.png" alt=""></img>
      <div className="MainComment">
        {contents.map((content, i) => (
          <div className="content" key={i}>
            {content}
          </div>
        ))}
        {subcontents.map((content, i) => (
          <div className="subcontent" key={i}>
            {content}
          </div>
        ))}
        <PostView />
      </div>
    </div>
  );
};

export default MainImage;
