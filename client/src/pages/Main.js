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
      <GoTop />
      <Footer />
    </div>
  );
};

export default Main;
