import * as chattingAPI from '../api/chatting';
const initialState = {
  rooms: {
    loading: false,
    data: null,
    error: null,
  },
  room: {
    loading: false,
    data: null,
    error: null,
  },
  chat: {
    loading: false,
    data: null,
    error: null,
  },
};

const GET_ROOMS = 'GET_ROOMS';
const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';
const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';

const CREATE_ROOM = 'CREATE_ROOM';
const CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS';
const CREATE_ROOM_ERROR = 'CREATE_ROOM_ERROR';

// const DELETE_ROOM = 'DELETE_ROOM';
// const DELETE_ROOM_SUCCESS = 'DELETE_ROOM_SUCCESS';
// const DELETE_ROOM_ERROR = 'DELETE_ROOM_ERROR';

const GET_CHAT_DATA = 'GET_CHAT_DATA';
const GET_CHAT_DATA_SUCCESS = 'GET_CHAT_DATA_SUCCESS';
const GET_CHAT_DATA_ERROR = 'GET_CHAT_DATA_ERROR';

export const getRooms = () => async (dispatch) => {
  dispatch({ type: GET_ROOMS });
  try {
    const rooms = await chattingAPI.getRoomList();
    dispatch({ type: GET_ROOMS_SUCCESS, rooms });
  } catch (error) {
    dispatch({
      type: GET_ROOMS_ERROR,
      error,
    });
  }
};

export const createRoom = (opponentId) => async (dispatch) => {
  dispatch({ type: CREATE_ROOM });
  try {
    const room = await chattingAPI.createRoom(opponentId);
    // console.log('createRoom');
    // console.log(room);
    dispatch({ type: CREATE_ROOM_SUCCESS, room });
  } catch (error) {
    dispatch({ type: CREATE_ROOM_ERROR, error });
  }
};

export const getChatData = (roomId) => async (dispatch) => {
  dispatch({ type: GET_CHAT_DATA });
  try {
    const chat = await chattingAPI.chatData(roomId);
    dispatch({ type: GET_CHAT_DATA_SUCCESS, chat });
  } catch (error) {
    dispatch({ type: GET_CHAT_DATA_ERROR, error });
  }
};

export default function chattingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: {
          loading: false,
          data: action.rooms,
          error: null,
        },
      };
    case GET_ROOMS_ERROR:
      return {
        ...state,
        rooms: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case CREATE_ROOM:
      return {
        ...state,
        room: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        room: {
          loading: false,
          data: action.room,
          error: null,
        },
      };
    case CREATE_ROOM_ERROR:
      return {
        ...state,
        room: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case GET_CHAT_DATA:
      return {
        ...state,
        chat: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_CHAT_DATA_SUCCESS:
      return {
        ...state,
        chat: {
          loading: false,
          data: action.chat,
          error: null,
        },
      };
    case GET_CHAT_DATA_ERROR:
      return {
        ...state,
        chat: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
