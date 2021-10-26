import React from 'react'
import { useDispatch } from 'react-redux';
import { setSigninModal } from '../actions/index';
const UserControl = () => {
  const dispatch = useDispatch();

  return (
    <div className="userControl">
      <div>새 글쓰기</div>
      <div onClick={() => {
        dispatch(setSigninModal(true));
      }}>로그인</div>
      <div>마이페이지</div>
    </div>
  )
}

export default UserControl
