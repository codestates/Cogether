import React from 'react';
import styled from 'styled-components';

const ChatDiv = styled.div`
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  .message {
    margin-top: 10px;
    display: inline-block;
    position: relative;
    padding: 1rem;
    background: #fff3bf;
    border-radius: 10px;
  }
  .message:before {
    border-top: 15px solid #fff3bf;
    border-left: 0px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 10px;
    right: -15px;
  }
`;

function ChattingMe({ chat }) {
  return (
    <ChatDiv>
      <div></div>
      <div className="message">{chat.content}</div>
    </ChatDiv>
  );
}

export default ChattingMe;
