import { Map } from 'immutable';

import { urlConstants,
         userConstants,
         chatConstants,
         channelConstants,
       } from '../constants';

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
      subscribedChannels: {
          data: [],
          errors: null,
      },
      activeChannel: {
        name: null,
        id: null,
      },
  },
  onlineUsers: [

  ],
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
            subscribedChannels: {
                data: [],
                errors: null,
            },
            activeChannel: {
                name: null,
                id: null,
            },
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
            subscribedChannels: {
                data: [],
                errors: null,
            },
            activeChannel: {
                name: null,
                id: null,
            },
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
          subscribedChannels: {
              data: JSON.parse(action.data.data.subscribedChannels),
          },
          activeChannel: {
            name: null,
          },
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

  /* LOAD INIT CHAT */

  [chatConstants.LOAD_CHAT_DATA]: (state, action) => {
    return state.merge(Map({
      channels: action.data.channels,
    }));
  },

  /* REFRESH USER ONLINE LIST */

  [chatConstants.REFRESH_ONLINE]: (state, action) => {
    return state.merge(Map({
      onlineUsers: action.data.onlineUsers,
    }));
  },

  /* SUBSCRIBE CHANNEL */

  [channelConstants.SUBSCRIBE_CHANNEL_REQUEST]: (state, action) => {
      const user = state.get('user');
      user.subscribedChannels = {
              data: [],
              error: null,
      }
    return state.merge(Map({
        user,
    }));
  },
  [channelConstants.SUBSCRIBE_CHANNEL_FAILURE]: (state, action) => {
      const user = state.get('user');
      user.subscribedChannels = {
              data: [],
              error: action.error.message,
      }
    return state.merge(Map({
        user,
    }));
  },
  [channelConstants.SUBSCRIBE_CHANNEL_SUCCESS]: (state, action) => {
      const user = state.get('user');
      user.subscribedChannels = {
              data: action.data,
              error: null,
      }
    return state.merge(Map({
        user,
    }));
  },

  /* SET ACTIVE CHANNEL */

  [channelConstants.SET_ACTIVE_CHANNEL]: (state, action) => {
      const user = state.get('user');
      user.activeChannel = {
              name: action.data.name,
              id: action.data.id,
      }
    return state.merge(Map({
        user,
    }));
  },

};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
