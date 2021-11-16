import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ChattingMe from './ChattingMe.js';
import ChattingYou from './ChattingYou';

function Chatting({ chatContent, data, msgList }) {
  const loginInfo = useSelector((state) => state.userReducer);
  const { userInfo } = loginInfo;

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(scrollToBottom, [msgList]);
  return (
    <>
      {data &&
        data.map((chat) => {
          if (chat.hello === 'hello') {
            return;
          } else if (userInfo.id === chat.userId) {
            return <ChattingMe chat={chat} key={chat.id} />;
          } else {
            return <ChattingYou chat={chat} key={chat.id} />;
          }
        })}
      {chatContent.map((chat, idx) => {
        if (chat.hello === 'hello') {
          return <div key={idx}>{chat.content}</div>;
        } else if (userInfo.id === chat.id) {
          return <ChattingMe chat={chat} key={idx} />;
        } else {
          return <ChattingYou chat={chat} key={idx} />;
        }
      })}
      <div ref={messagesEndRef} />
    </>
  );
}

export default Chatting;
