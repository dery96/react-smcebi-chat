import { urlConstants, userConstants } from '../constants';
import api from 'api';

export const userLoginStart = () => {
    return {
        type: userConstants.LOGIN_REQUEST,
        loading: true,
    }
}

export const userLoginSuccess = data => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        data,
    }
}

export const userLoginFailure = error => {
    return {
        type: userConstants.LOGIN_FAILURE,
        error,
    }
}

export const userLoginAction = (username, password) => {
    return dispatch => {
        dispatch(userLoginStart());

        api.userLogin(username, password)
          .then(data => dispatch(userLoginSuccess(data)))
          .catch(error => dispatch(userLoginFailure(error)));
    };
}

export default {
    userLoginAction,
};
