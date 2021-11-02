import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/Nav';
import Main from './pages/Main';
import SigninModal from './components/SigninModal';
import RequireModal from './components/RequireModal';
import ConfirmModal from './components/ConfirmModal';
import { setConfirmModal, setIsLogin } from './actions/index';
import Setting from './pages/Setting';
import Write from './pages/Write';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.accessToken;
  console.log('토큰', token);

  useEffect(() => {
    dispatch(setConfirmModal(false, ''));

    if (token === null) {
      dispatch(setIsLogin(false));
    }
  }, []);

  const SigninInfo = useSelector((state) => state.userReducer);

  const {
    isLogin,
    isSigninModalOpen,
    isRequireModalOpen,
    confirmModal,
    isMessage,
  } = SigninInfo;

  const url = new URL(window.location.href);
  const href = url.href;
  const accessToken = href.split('=')[1];

  if (accessToken && isLogin) {
    localStorage.setItem('accessToken', accessToken);
    window.location.href = `${process.env.REACT_APP_DOMAIN}`;
  }

  return (
    <BrowserRouter>
      <div className="appContainer">
        <ConfirmModal
          isOpenCon={confirmModal.isConfirmOpen}
          content={confirmModal.content}
          isMessage={isMessage}
        />
        <SigninModal isOpen={isSigninModalOpen} isMessage={isMessage} />
        <RequireModal isOpenRe={isRequireModalOpen} />
        <Nav isLogin={isLogin} />

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
