import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Main from './pages/Main';
import SigninModal from './components/SigninModal';
import RequireModal from './components/RequireModal';
import Setting from './pages/Setting';
import Write from './pages/Write';

function App() {
  const SigninInfo = useSelector((state) => state.userReducer);
  const { isSigninModalOpen, isRequireModalOpen } = SigninInfo;
  return (
    <BrowserRouter>
      <div className="appContainer">
        <SigninModal isOpen={isSigninModalOpen} />
        <RequireModal isOpenRe={isRequireModalOpen} />
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
