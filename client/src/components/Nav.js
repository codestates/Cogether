import React,{ useState } from 'react'
import '../scss/Nav.scss'
import Mypage from './Mypage'
import UserControl from './UserControl'
import { useHistory } from 'react-router';

const Nav = () => {

  const history = useHistory();

  const [isLogin, setLogin] = useState(true);
  const newPost = () =>{
    history.push('/write')
  }
  return (
    <nav>
      <div className = "nav-logo">
        <img className = "nav-logo-full"
          src="images/logo_cogether-removebg-preview.png"
          >
        </img>
        <img className = "nav-logo-small"
          src="images/favicon-removebg.png"
          >
        </img>
      </div>
      <div className="nav-user">
        <span onClick={newPost}>새글쓰기</span>
        {isLogin ? <Mypage /> :<UserControl />}
      </div>
      
      
      
    </nav>
  )
}

export default Nav
