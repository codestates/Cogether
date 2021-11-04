import React from 'react';
import Footer from '../components/Footer';
import LanguageBar from '../components/LanguageBar';
import MainImage from '../components/MainImage';
import PostList from '../components/PostList';
import PostView from '../components/PostView';
import '../scss/Main.scss';

const Main = () => {
  return (
    <div>
      <MainImage
        contents={[
          '코딩을 배우는 당신,',
          '코딩을 직업으로 하는 당신,',
          '밤새 코딩과 사투를 벌여온 당신,',
          'Cogether에서는 더 이상 혼자가 아닙니다.',
        ]}
        imageLink={'images/MainPage.svg'}
      />
      <PostView />
      <div className="mainLanguageBar">
        <LanguageBar />
      </div>

      <PostList />
      <Footer />
    </div>
  );
};

export default Main;
