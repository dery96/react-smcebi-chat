import { urlConstants, chatConstants } from '../constants';
import api from 'api';

export const newMessage = data => {
    return {
        type: chatConstants.NEW_MESSAGE,
        data: data,
    }
}

export const initialMessages = data => {
    return {
        type: chatConstants.INITIAL_CHANNEL_MESSAGES,
        data: data,
    }
}

export const loadInitialMessages = (socket) => {
	return (dispatch) => {
		// dispatch(clearAllItems())
		socket.on('initialList', res => {
		   // console.dir(res)
		   dispatch( initialMessages(res) )
	   })
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
    initialMessages,
    loadInitialMessages,
    clearMessages,
}
