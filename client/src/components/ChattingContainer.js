import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../reducers/chattingReducer';
import styled from 'styled-components';
import Rooms from './Rooms';

const ImgDiv = styled.div`
  text-align: center;
`;

const ChattingContainer = () => {
  const { loading, error, data } = useSelector(
    (state) => state.chattingReducer.rooms
  );
  console.log('data', data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!data)
    return (
      <ImgDiv>
        <div>채팅 목록이 없습니다.</div>
        <img src="/images/No_data.svg" alt="" />
      </ImgDiv>
    );
  return (
    <div>
      <Rooms data={data} />
    </div>
  );
};
export default ChattingContainer;
