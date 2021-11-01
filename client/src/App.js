import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Main from './pages/Main';
import SigninModal from './components/SigninModal';
import RequireModal from './components/RequireModal';
import ConfirmModal from './components/ConfirmModal';
import { setConfirmModal } from './actions/index';

import Setting from './pages/Setting';
import Write from './pages/Write';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setConfirmModal(false, '');
  }, []);
  const SigninInfo = useSelector((state) => state.userReducer);

  const { isLogin, isSigninModalOpen, isRequireModalOpen, confirmModal } =
    SigninInfo;
  console.log('로그인상태', isLogin);
  console.log('토큰', `${localStorage.accessToken}`);
  console.log('확인모달', SigninInfo);
  console.log('리콰이어', isRequireModalOpen);

  useEffect(async () => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (hash) {
      const accessToken = hash.split('=')[1].split('&')[0];
      await axios
        .get(
          'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' +
            accessToken,
          {
            headers: {
              authorization: `token ${accessToken}`,
              accept: 'application/json',
            },
          }
        )
        .then((data) => {
          console.log(data.data.name);
          console.log(data);
          setData(data);
        })
        .catch((e) => console.log('oAuth token expired'));
    }
  }, []);

  const google = <FontAwesomeIcon icon={faGoogle} size="10x" />;
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=264496552881-s0io8edfh4rac005mpmcj8g68gp3c2rk.apps.googleusercontent.com&
response_type=token&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;

  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  };
  return (
    <BrowserRouter>
      <div className="appContainer">
        <ConfirmModal
          isOpenCon={confirmModal.isConfirmOpen}
          content={confirmModal.content}
        />
        <SigninModal isOpen={isSigninModalOpen} />
        <RequireModal isOpenRe={isRequireModalOpen} />
        <Nav isLogin={isLogin} />
        <div>
          <button id="oAuthBtn" onClick={oAuthHandler}>
            {google}
            <div id="comment">구글 OAuth</div>
          </button>
        </div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/write">
            <Write />
          </Route>
          <Route exact path="/setting">
            <Setting />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
