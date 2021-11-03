import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/Nav';
import Main from './pages/Main';
import Post from './pages/Post';
import SigninModal from './components/SigninModal';
import RequireModal from './components/RequireModal';
import ConfirmModal from './components/ConfirmModal';
import { setIsLogin } from './actions/index';
import Setting from './pages/Setting';
import Write from './pages/Write';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.accessToken;
  console.log('토큰', token);
  console.log('토큰', `${localStorage.accessToken}`);

  const url = new URL(window.location.href);
  const href = url.href;
  const accessToken = href.split('=')[1];

  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    window.location.href = `${process.env.REACT_APP_DOMAIN}`;
  }

  return (
    <BrowserRouter>
      <div className="appContainer">
        <ConfirmModal />
        <SigninModal />
        <RequireModal />
        <Nav />

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
          <Route exact path="/post">
            <Post />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
