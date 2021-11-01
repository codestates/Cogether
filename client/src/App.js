import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/Nav';
import Main from './pages/Main';
import SigninModal from './components/SigninModal';
import RequireModal from './components/RequireModal';
import ConfirmModal from './components/ConfirmModal';
import { setConfirmModal } from './actions/index';
import Setting from './pages/Setting';
import Write from './pages/Write';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfirmModal(false, ''));
  }, []);

  const SigninInfo = useSelector((state) => state.userReducer);

  const {
    isLogin,
    isSigninModalOpen,
    isRequireModalOpen,
    confirmModal,
    isMessage,
  } = SigninInfo;
  console.log('로그인상태', isLogin);
  console.log('토큰', `${localStorage.accessToken}`);
  console.log('확인모달', SigninInfo);
  console.log('리콰이어', isRequireModalOpen);

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
