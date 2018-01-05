import { urlConstants, chatConstants } from '../constants';
import api from 'api';

export const loadChatData = data => {
    return {
        type: chatConstants.LOAD_CHAT_DATA,
        data,
    }
};

export const loadChatAction = (data) => {
    return (dispatch) => {
        dispatch( loadChatData(data) )
    }
};

export const refreshOnline = data => {
    return {
        type: chatConstants.REFRESH_ONLINE,
        data,
    }
};

export const refreshOnlineAction = (data) => {
    
    return (dispatch) => {
        dispatch( refreshOnline(data) )
    }
};

export default {
    loadChatAction,
    refreshOnlineAction,
};
