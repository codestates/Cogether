import React from 'react';
import { Link } from 'react-router-dom';

const Rooms = ({ data }) => {
  return (
    <div>
      {data.map((room) => (
        <div key={room.roomId}>
          <Link to={`/chatlist/${room.roomId}`}>
            <div>
              <img src={room.opponentImage} alt={room.opponentNickname} />
              <p>{room.opponentNickname}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
