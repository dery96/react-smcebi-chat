// import axios from 'axios';

import { urlConstants, userConstants } from '../constants';
import api from 'api';

export const userRegisterStart = () => {
    return {
        type: userConstants.REGISTER_REQUEST,
        loading: true,
    }
}

export const userRegisterSuccess = data => {
    return {
        type: userConstants.REGISTER_SUCCESS,
        data,
    }
}

export const userRegisterFailure = error => {
    return {
        type: userConstants.REGISTER_FAILURE,
        error,
    }
}

export const userRegisterAction = (login, password, nickname, gender) => {
    return dispatch => {
        dispatch(userRegisterStart());

        api.userRegister(login, password, nickname, gender)
        .then(data => dispatch(userRegisterSuccess(data)))
        .catch(error => dispatch(userRegisterFailure(error)));
    }
}

export const userRegisterActionFinal = () => {
    return dispatch => {
        dispatch({
            type: userConstants.REGISTER_SUCCESS_CLR_STATUS,
        });
    }
}

export default {
    userRegisterAction,
    userRegisterActionFinal,
};
