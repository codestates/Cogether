import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Main from './pages/Main';
import Post from './pages/Post';
import SigninModal from './components/SigninModal';
import RequireModal from './components/RequireModal';
import ConfirmModal from './components/ConfirmModal';
import QuarterModal from './components/QuarterModal';
import Setting from './pages/Setting';
import Write from './pages/Write';
import Chatlist from './pages/Chatlist';

function App() {
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
      <div className='appContainer'>
        <ConfirmModal />
        <QuarterModal />
        <SigninModal />
        <RequireModal />
        <Nav />

        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/write'>
            <Write />
          </Route>
          <Route exact path='/setting'>
            <Setting />
          </Route>
          <Route exact path='/post/:postId'>
            <Post />
          </Route>
          <Route exact path='/write/:postId'>
            <Write />
          </Route>
          <Route exact path='/chatlist'>
            <Chatlist />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
