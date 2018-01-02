// import axios from 'axios';

import { urlConstants, userConstants } from '../constants';
import api from 'api';

export const userLogout = () => {
    return {
        type: userConstants.LOGOUT,
    };
}
export const userLogoutAction = (token) => {
    return dispatch => {
        api.userLogout(token)
          .then(data => dispatch(userLogout()));
    }
}

export default {
    userLogoutAction,
};
