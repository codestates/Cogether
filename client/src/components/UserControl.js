import React from 'react'
import { useDispatch } from 'react-redux';
import { setSigninModal } from '../actions/index';
const UserControl = () => {
  const dispatch = useDispatch();

  return (
    <div className="userControl">
      <div onClick={() => {
        dispatch(setSigninModal(true));
      }}>로그인</div>
    </div>
  )
}

export default UserControl
