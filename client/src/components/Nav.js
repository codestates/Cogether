import React,{ useState } from 'react'
import '../scss/Nav.scss'
import Mypage from './Mypage'
import UserControl from './UserControl'


const Nav = () => {

  const [isLogin, setLogin] = useState(true);

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
        <span>새글쓰기</span>
        {isLogin ? <Mypage /> :<UserControl />}
      </div>
      
      
      
    </nav>
  )
}

export default Nav
