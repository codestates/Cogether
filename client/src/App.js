import './App.scss';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Main from './pages/Main';
import SigninModal from './components/SigninModal';

function App() {
  const SigninInfo = useSelector((state) => state.userReducer);
  const { isSigninModalOpen} =SigninInfo;
  return (
    <div className="appContainer">
      <SigninModal isOpen={isSigninModalOpen} />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
