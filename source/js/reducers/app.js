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
  onlineUsers: [],
  messages: [],
  channels: [],
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
        onlineUsers: [],
        messages: [],
        channels: [],
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
        onlineUsers: [],
        messages: [],
        channels: [],
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
            id: null,
          },
      },
      onlineUsers: [],
      messages: [],
      channels: [],
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

  [chatConstants.NEW_MESSAGE]: (state, action) => {
    /* FIND PROPER CHANNEL TO WHOM YOU WANT TO ADD NEW MESSAGE */
    const stateMessages = state.get('messages')

    console.log(stateMessages);
    if (stateMessages.length !== 0) {
        var properChannel = stateMessages.find( channel => {
            return channel.channelId == action.data.channelId
        })
        if (typeof properChannel !== 'undefined') {
            properChannel.text = [...properChannel.text, action.data]

            stateMessages.map( (value, index, arr) => {
                if (value.channelId === action.data.channelId) {
                    arr[index] = properChannel
                }
            })

            return state.merge(Map({
              messages: [ ...stateMessages],
          }));

        } else {
            properChannel = {
                channelId: action.data.channelId,
                text: action.data,
            }
            return state.merge(Map({
              messages: [ ...stateMessages, properChannel],
          }));
        }

    } else {
      const channel = {
          channelId: action.data.channelId,
          text: [ ...stateMessages, action.data],
      }
      return state.merge(Map({
        messages: [ ...stateMessages, channel],
    }));
  }

    /* if (typeof stateMessages[0] !== 'undefined') {

        var id1 = action.data.channelId
        const checkIfExists = stateMessages.find( ( subscribedChannel ) => {
        return subscribedChannel.channelId === id1
        });

        if (typeof checkIfExists !== 'undefined') {
            console.log("Dzialam w 1");
            console.log(action.data, action.data.channelId);
            var id = action.data.channelId
            const messages = stateMessages.map( ( subscribedChannel ) => {
                console.log("subscribed", subscribedChannel);
               if (subscribedChannel.channelId === id) {
                   subscribedChannel = [...subscribedChannel, action.data]
               }
           });

            return state.merge(Map({
              messages: messages,
            }));
        } else {
            console.log("Dzialam w 2");
            console.log(action.data.channelId);
            const channel = {
                channelId: action.data.channelId,
                text: [{
                    date: action.data.date,
                    author: action.data.author,
                    onlineUsers: action.data.onlineUsers,
                    text: action.data.text,
                    type: action.data.type
                }],
            }

            const messages = [...stateMessages, channel]

            return state.merge(Map({
              messages: messages,
            }));
        }
    }

    return state.merge(Map({
      ...stateMessages,
  })); */
  },
  [chatConstants.CLEAR_MESSAGES]: (state, action) => {
    return state.merge(Map({
      messages: [],
    }));
  },

  /* LOAD INIT CHAT */

  [chatConstants.LOAD_CHAT_DATA]: (state, action) => {
      const channels = action.data.channels;
    return state.merge(Map({
      channels: channels,
    }));
  },

  /* REFRESH USER ONLINE LIST */

  [chatConstants.REFRESH_ONLINE]: (state, action) => {
      const onlineUsers = action.data.onlineUsers;
    return state.merge(Map({
      onlineUsers: onlineUsers,
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
        ...user,
    }));
  },
  [channelConstants.SUBSCRIBE_CHANNEL_FAILURE]: (state, action) => {
      const user = state.get('user');
      user.subscribedChannels = {
              data: [],
              error: action.error.message,
      }
    return state.merge(Map({
        ...user,
    }));
  },
  [channelConstants.SUBSCRIBE_CHANNEL_SUCCESS]: (state, action) => {
      const user = state.get('user');
      user.subscribedChannels = {
              data: action.data,
              error: null,
      }
    return state.merge(Map({
        user: {
            ...user,
        },
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
        user: {
            ...user,
        }
    }));
  },

};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
