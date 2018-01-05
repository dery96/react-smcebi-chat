import { urlConstants, chatConstants } from '../constants';
import api from 'api';

export const newMessage = data => {
    return {
        type: chatConstants.NEW_MESSAGE,
        data: data,
    }
}

export const clearMessages = ( socket, id, item ) => {
    return dispatch => {
        dispatch({
            type: chatConstants.CLEAR_MESSAGES,
        });
    }
}
export default {
    newMessage,
    clearMessages,
}
