import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChatData } from '../reducers/chattingReducer';
import Chatting from './Chatting';
import ChattingInput from './ChattingInput';
import styled from 'styled-components';

const ChattingMessage = styled.div`
  height: 570px;
  overflow-y: auto;
`;

const DetailChatContainer = ({ socket, roomId }) => {
  const [message, setMessage] = useState('');
  const [msgList, setMsgList] = useState([]);
  const { loading, error, data } = useSelector(
    (state) => state.chattingReducer.chat
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatData(roomId));
    // 여기에다가 채팅목록 뿌려줘야됨 쿼리파라미터로 roomid다 가져와서
    console.log('data', data);
    socket.on('onReceive', (msg) => {
      // console.log(msg);
      setMsgList((msgList) => [...msgList, msg]);
    });

    socket.on('onConnect', (msg) => {
      setMsgList((msgList) => [...msgList, msg]);
    });
  }, [socket, dispatch, roomId]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit('onSend', message);
      setMessage('');
    },
    [message, socket]
  );

  const onMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!data) return <div>비었음</div>;

  return (
    <>
      <ChattingMessage>
        <Chatting
          roomId={roomId}
          chatContent={msgList}
          data={data}
          msgList={msgList}
        />
      </ChattingMessage>
      <ChattingInput
        onSubmit={onSubmit}
        onMessageChange={onMessageChange}
        message={message}
      />
    </>
  );
};

export default DetailChatContainer;
