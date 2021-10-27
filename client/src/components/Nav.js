import React, { useState } from 'react';
import '../scss/Nav.scss';
import Mypage from './Mypage';
import UserControl from './UserControl';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Nav = () => {
  const history = useHistory();

  const [isLogin, setLogin] = useState(false);
  const newPost = () => {
    history.push('/write');
  };
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
        <span onClick={newPost}>새글쓰기</span>
        {isLogin ? <Mypage /> : <UserControl />}
      </div>
    </nav>
  );
};

export default Nav;
