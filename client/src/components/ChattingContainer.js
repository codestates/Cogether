import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../reducers/chattingReducer';
import styled from 'styled-components';
import Rooms from './Rooms';

const ImgDiv = styled.div`
  text-align: center;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.div`
  font-weight: bolder;
  font-size: 60px;
  margin: 1.3rem;
`;

const ChattingContainer = () => {
  const { loading, error, data } = useSelector(
    (state) => state.chattingReducer.rooms
  );
  console.log('data', data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms());
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
    <DivContainer>
      <H1>나의 채팅목록</H1>
      <Rooms data={data} />
    </DivContainer>
  );
};
export default ChattingContainer;
