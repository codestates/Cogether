import React from 'react';

const Rooms = ({ data }) => {
  return (
    <div>
      정상
      {data.map((room) => console.log(room))}
    </div>
  );
};

export default Rooms;
