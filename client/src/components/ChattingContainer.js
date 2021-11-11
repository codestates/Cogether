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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [dispatch]);
  if (loading) return <div>로딩 중 입니다.</div>;
  if (error) return <div>다시 시도해주세요.</div>;
  if (!data)
    return (
      <ImgDiv>
        <div>채팅 목록이 없습니다.</div>
        <img src='/images/No_data.svg' alt='' />
      </ImgDiv>
    );
  return (
    <DivContainer>
      <H1>채팅 목록</H1>
      <Rooms data={data} />
    </DivContainer>
  );
};
export default ChattingContainer;
