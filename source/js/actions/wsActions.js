import { chatConstants, urlConstants } from '../constants';
import api from 'api';

import { newMessage,
         clearMessages,
         loadChatAction,
         refreshOnlineAction,
         userLogoutAction,
         } from 'actions';

export const openWsConnection = data => {
    return {
        type: chatConstants.OPEN_WS_CONNECTION,
        data: data,
    }
};

export const closeWsConnection = () => {
    return {
        type: chatConstants.CLOSE_WS_CONNECTION,
    }
};

export const wsSendMessage = (data) => {
    return {
        type: chatConstants.WS_SEND_MESSAGE,
        data: data,
    }
};

export const wsSendAction = ( msg ) => {
    return dispatch => {
        dispatch( wsSendMessage({ msg: msg }) );
    };
};


export const wsConnectionAction = (username, token, channelId, channelName) => {
    username = "?username=" + username;
    token = "&token=" + token;

    channelId = channelId ? '&id=' + channelId : '';
    channelName = channelName ? '&channel_name=' + channelName : '';
    const type = channelId && channelName ? 'CHANNEL_CONNECT' : 'BASIC_FETCH';

    return dispatch => {
        const wsConn = new WebSocket(urlConstants.CHAT_URL + username +
                          token + channelId + channelName);


        wsConn.onmessage = msg => {
            msg = JSON.parse(msg.data);

            if (msg.type === 'CHANNELS') {
                msg.channels = JSON.parse(msg.channels);
                dispatch( loadChatAction(msg) )
                dispatch( refreshOnlineAction( msg.onlineUsers) )
            }

            if (msg.type === 'ONLINE_USERS') {
                if ( !msg.onlineUsers.includes(username) ) {
                    dispatch( userLogoutAction(token) );
                } else {
                    dispatch( refreshOnlineAction( msg.onlineUsers ) )
                }
            }

            if (msg.type === 'MESSAGE') {
                dispatch( newMessage(msg) )
            }
        }
        wsConn.onclose = () => console.log("close connection");

        dispatch( openWsConnection( { ws: wsConn } ));
    };
};

export default {
    wsConnectionAction,
    wsSendAction,
    closeWsConnection,
};
