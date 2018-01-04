import { Map } from 'immutable';

import { urlConstants, userConstants, chatConstants } from '../constants';

import {
  TEST_ACTION,
  TEST_ASYNC_ACTION_START,
  TEST_ASYNC_ACTION_ERROR,
  TEST_ASYNC_ACTION_SUCCESS,
} from 'actions/app';


const initialState = Map({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  loading: false,

  login: {
      error: null,
      status: null,
  },
  register: {
      error: null,
      status: null,
  },
  user: {
      token: null,
      id: null,
      nickname: null,
      login: null,
      gender: null,
      registration_date: null,
      subscribedChannels: [],
      activeChannel: null,
  },
  onlineUsers: [],
  messages: [
  ],
  channels: [
  ],

});

const actionsMap = {
  [TEST_ACTION]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge(Map({
      counter,
    }));
  },

  // Async action
  [TEST_ASYNC_ACTION_START]: (state) => {
    return state.merge(Map({
      asyncLoading: true,
      asyncError: null,
      asyncData: null,
    }));
  },
  [TEST_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncError: action.error.message,
    }));
  },
  [TEST_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncData: action.data,
    }));
  },

  /* LOGOUT */

  [userConstants.LOGOUT]: (state, action) => {
    return state.merge(Map({
        loading: false,
        login: {
            error: null,
            status: null,
        },
        user: {
            token: null,
            id: null,
            nickname: null,
            login: null,
            gender: null,
            registration_date: null,
            subscribedChannels: {},
            activeChannel: null,
        },
    }));
  },

  /* LOGIN */

  [userConstants.LOGIN_REQUEST]: (state, action) => {
    return state.merge(Map({
        loading: true,
        login: {
            error: null,
            status: null,
        },
        user: {
            token: null,
            id: null,
            nickname: null,
            login: null,
            gender: null,
            registration_date: null,
            subscribedChannels: [],
            activeChannel: null,
        },
    }));
  },
  [userConstants.LOGIN_FAILURE]: (state, action) => {
    return state.merge(Map({
      loading: false,
      login: {
          error: action.error.message,
          status: action.error.status,
      },
    }));
  },
  [userConstants.LOGIN_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      login: {
          error: null,
          status: action.data.status,
      },
      user: {
          token: action.data.data.token,
          id: action.data.data.id,
          nickname: action.data.data.nickname,
          login: action.data.data.login,
          gender: action.data.data.gender,
          registration_date: action.data.data.registration_date,
          subscribedChannels: [],
          activeChannel: null,
      }
    }));
  },

  /* REGISTRATION */

  [userConstants.REGISTER_REQUEST]: (state, action) => {
    return state.merge(Map({
        loading: false,
        register: {
            error: null,
            status: null,
        }
    }));
  },
  [userConstants.REGISTER_FAILURE]: (state, action) => {
    return state.merge(Map({
        loading: false,
        register: {
            error: action.error.message,
            status: action.error.status,
        }
    }));
  },
  [userConstants.REGISTER_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      register: {
          error: null,
          status: action.data.status,
      }
    }));
  },
  [userConstants.REGISTER_SUCCESS_CLR_STATUS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      register: {
          error: null,
          status: null,
      }
    }));
  },

  /* CHAT */

  [chatConstants.INITIAL_CHANNEL_MESSAGES]: (state, action) => {
    return state.merge(Map({
      messages: action.data.messages,
    }));
  },
  [chatConstants.NEW_MESSAGE]: (state, action) => {
    return state.merge(Map({
      messages: [...state.get('messages'), JSON.parse(action.data)],
    }));
  },
  [chatConstants.CLEAR_MESSAGES]: (state, action) => {
    return state.merge(Map({
      messages: [],
    }));
  },

  /* ONLINE USERS */

  [userConstants.GET_ONLINE_USERS_REQUEST]: (state, action) => {
    return state.merge(Map({
        onlineUsers: {
            data: null,
            error: null,
            status: null,
        }
    }));
  },
  [userConstants.GET_ONLINE_USERS_SUCCESS]: (state, action) => {
    return state.merge(Map({
        onlineUsers: {
            error: action.error.message,
            status: action.error.status,
        }
    }));
  },
  [userConstants.GET_ONLINE_USERS_FAILURE]: (state, action) => {
    return state.merge(Map({
      onlineUsers: {
          error: null,
          status: action.data.status,
          data: action.data.onlineUsers,
      }
    }));
  },

  /* LOAD INIT CHAT */

  [chatConstants.LOAD_CHAT_DATA]: (state, action) => {
    return state.merge(Map({
      channels: action.data.channels,
    }));
  },

  /* LOAD INIT CHAT */

  [chatConstants.REFRESH_ONLINE]: (state, action) => {
    return state.merge(Map({
      onlineUsers: action.data.onlineUsers,
    }));
  },

};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
