import React from 'react';
import { Link } from 'react-router-dom';

const Rooms = ({ data }) => {
  console.log('data', data);
  return (
    <div>
      {data.map((room) => (
        <div key={room.roomId}>
          <Link to={`/chatlist/${room.roomId}`}>
            <div>
              <img
                src={
                  room.opponentImage
                    ? room.opponentImage
                    : '/images/default-profile.jpg'
                }
                alt={room.opponentNickname}
                style={{ width: '300px' }}
              />
              <p>{room.opponentNickname}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
