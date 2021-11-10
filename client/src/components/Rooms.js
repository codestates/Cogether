import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  flex: 0 0 70px;
  width: 70px;
  height: 70px;
  margin-right: 0.8rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ListBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 45px;
  margin-top: 1rem;
  button {
    border: 0;
    outline: 0;
    background: #fff;
  }
  button:hover {
    cursor: pointer;
  }
  i {
    margin: 1rem;
    margin-right: 2rem;
    color: #ccc;
  }
  i:hover {
    color: #c48eee;
  }
`;

const Rooms = ({ data }) => {
  console.log('data', data);
  return (
    <ListBox>
      {data.map((room) => (
        <ListBoxContainer key={room.roomId}>
          <Link to={`/chatlist/${room.roomId}`}>
            <div className="title">
              <ImgDiv>
                <img
                  src={
                    room.opponentImage
                      ? room.opponentImage
                      : '/images/default-profile.jpg'
                  }
                  alt={room.opponentNickname}
                />
              </ImgDiv>
              <p>{room.opponentNickname}</p>
            </div>
          </Link>
          <button>
            <i className="fas fa-trash-alt"></i>
          </button>
        </ListBoxContainer>
      ))}
    </ListBox>
  );
};

export default Rooms;
