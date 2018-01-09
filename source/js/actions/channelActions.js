import { channelConstants } from '../constants';
import api from 'api';

export const subscribeChannelRequest = () => {
    return {
        type: channelConstants.SUBSCRIBE_CHANNEL_REQUEST,
    }
};

export const subscribeChannelFailure = error => {
    return {
        type: channelConstants.SUBSCRIBE_CHANNEL_FAILURE,
        error,
    }
};

export const subscribeChannelSuccess = data => {
    return {
        type: channelConstants.SUBSCRIBE_CHANNEL_SUCCESS,
        data,
    }
};

export const subscribeChannelAction = (channel_id, user_id, token) => {
    return dispatch => {
        dispatch(subscribeChannelRequest());

        api.subscribeChannel(channel_id, user_id, token)
          .then(data => dispatch(subscribeChannelSuccess(data.data)))
          .catch(error => dispatch(subscribeChannelFailure(error)));
    };
};

export const newChannelRequest = () => {
    return {
        type: channelConstants.NEW_CHANNEL_REQUEST,
    }
};

export const newChannelFailure = error => {
    return {
        type: channelConstants.NEW_CHANNEL_FAILURE,
        error,
    }
};

export const newChannelSuccess = data => {
    return {
        type: channelConstants.NEW_CHANNEL_SUCCESS,
        data,
    }
};

export const newChannelAction = (name, size, user_id, token) => {
    return dispatch => {
        dispatch(newChannelRequest());

        api.newChannel(name, size, user_id, token)
          .then(data => dispatch(newChannelSuccess(data.data)))
          .catch(error => dispatch(newChannelFailure(error)));
    };
};

export const setActiveChannel = data => {
    return {
        type: channelConstants.SET_ACTIVE_CHANNEL,
        data,
    }
};

export const setActiveChannelAction = data => {
    return dispatch => {
        dispatch( setActiveChannel( data ) );
    };
};
export default {
    subscribeChannelAction,
    setActiveChannelAction,
    newChannelAction,
};
