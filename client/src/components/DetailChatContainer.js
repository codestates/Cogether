import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChatData } from '../reducers/chattingReducer';
import Chatting from './Chatting';
import ChattingInput from './ChattingInput';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  h1 {
    margin-bottom: 1rem;
  }
  .chattList {
    display: flex;
    width: 85%;
    justify-content: flex-start;
    margin-left: 1rem;
    margin-bottom: 1rem;
    button {
      font-family: 'IBMPlexSansKR-Regular';
      min-width: 70px;
      background-color: #d3a4f9;
      color: white;
      border-radius: 2rem;
      padding: 10px 20px;
      font-size: 20px;
      margin-right: 1.5rem;
      border: none;
    }
    button:hover {
      color: #870cec;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .chattingContainer {
    display: flex;
    flex-direction: column;
    width: 85%;
    /* background: blue; */
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 25px;
  }
`;

const ChattingMessage = styled.div`
  height: 570px;
  overflow-y: auto;
`;

const DetailChatContainer = ({ socket, roomId }) => {
  const [message, setMessage] = useState('');
  const [msgList, setMsgList] = useState([]);
  const history = useHistory();
  const { loading, error, data } = useSelector(
    (state) => state.chattingReducer.chat
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatData(roomId));

    socket.on('onReceive', (msg) => {
      setMsgList((msgList) => [...msgList, msg]);
    });

    socket.on('onConnect', (msg) => {
      setMsgList((msgList) => [...msgList, msg]);
    });

    socket.on('onDisconnect', (msg) => {
      setMsgList((msgList) => [...msgList, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, dispatch, roomId]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit('onSend', message);
      setMessage('');
    },
    [message, socket]
  );

  const backPage = () => {
    history.push('/chatlist');
  };

  const onMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!data) return <div>비었음</div>;

  return (
    <DivContainer>
      <h1>실시간 채팅</h1>
      <div className="chattList">
        <button onClick={backPage}>목록</button>
      </div>
      <div className="chattingContainer">
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
      </div>
    </DivContainer>
  );
};

export default DetailChatContainer;
