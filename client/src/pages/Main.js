import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import LanguageBar from '../components/LanguageBar';
import MainImage from '../components/MainImage';
import PostList from '../components/PostList';
import PostView from '../components/PostView';
import GoTop from '../components/GoTop';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../actions/index';
import '../scss/Main.scss';
import axios from 'axios';

const Main = () => {
  const GoogleUser = useSelector((state) => state.userReducer);
  const { isGoogleLogin } = GoogleUser;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isGoogleLogin) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/userinfo`, {
          headers: {
            authorization: `Bearer ${localStorage.accessToken}`,
          },
        })
        .then((res) => {
          console.log('res', res);
          dispatch(setUserInfo(res.data.data));
        })
        .catch((err) => {
          console.log('에러');
        });
    }
  }, []);
  return (
    <div>
      <div className="main-container">
        <MainImage
          contents={['Cogether에서', '자기개발과 프로젝트를', '시작해보세요']}
          subcontents={['코딩을 직업으로 하는 당신은 더 이상 혼자가 아닙니다.']}
          imageLink={'images/MainPage.svg'}
        />
        <PostView />
      </div>
      <div className="mainLanguageBar">
        <LanguageBar />
      </div>
      <PostList />
      <GoTop />
      <Footer />
    </div>
  );
};

export default Main;
