import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../scss/Mypage.scss'

const Mypage = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div onClick={toggleClass}> 마이페이지
      <ul className={isActive ? "mypage-menu active" : "mypage-menu"}>
        <Link to="/setting" style={{ textDecoration: 'none' }}>
          <li>회원정보 수정</li>
        </Link>
        <li>채팅목록</li>
        <li>채팅방</li>
        <li>로그아웃</li>
      </ul>
    </div>
  )
}

export default Mypage
