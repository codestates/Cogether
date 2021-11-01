import '../scss/Nav.scss';
import Mypage from './Mypage';
import UserControl from './UserControl';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setSigninModal } from '../actions';
import { useDispatch } from 'react-redux';

const Nav = ({ isLogin }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img
            className="nav-logo-full"
            src="images/logo_cogether-removebg-preview.png"
          ></img>
          <img
            className="nav-logo-small"
            src="images/favicon-removebg.png"
          ></img>
        </Link>
      </div>
      <div className="nav-user">
        <span
          onClick={() => {
            if (!isLogin) {
              dispatch(setSigninModal(true));
              return;
            }
            history.push('/Write');
          }}
        >
          새글쓰기
        </span>
        {isLogin ? <Mypage /> : <UserControl />}
      </div>
    </nav>
  );
};

export default Nav;
