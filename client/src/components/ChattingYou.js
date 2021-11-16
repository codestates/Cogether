import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ImgDiv = styled.div`
  flex: 0 0 70px;
  width: 70px;
  height: 70px;

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ChatDiv = styled.div`
  margin-left: 1rem;
  .nickname {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }
  .message {
    position: relative;
    padding: 1rem;
    background: #c48eee;
    border-radius: 10px;
  }
  .message:after {
    border-top: 15px solid #c48eee;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 10px;
    left: -15px;
  }
`;

function ChattingYou({ chat }) {
  return (
    <Container>
      <ImgDiv>
        <img
          src={
            chat.User.image !== null
              ? chat.User.image
              : '/images/default-profile.jpg'
          }
          alt={chat.User.nickname}
        />
      </ImgDiv>
      <ChatDiv>
        <div className='nickname'>{chat.User.nickname}</div>
        <div className='message'>{chat.content}</div>
      </ChatDiv>
    </Container>
  );
}

export default ChattingYou;
