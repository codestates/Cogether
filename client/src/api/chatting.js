import axios from 'axios';

export const getRoomList = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/chatrooms`,
    {
      withCredentials: true,
    }
  );
  //console.log(response.data);
  return response.data.data;
};

export const createRoom = async (opponentId) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/chatrooms`,
      {
        opponentId,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const deleteRoom = async (roomId) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_API_URL}/chatrooms`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const chatData = async (roomId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/chattings/${roomId}`,
    {
      withCredentials: true,
    }
  );
  // console.log('====api====');
  // console.log(response.data.data);
  return response.data.data;
};
