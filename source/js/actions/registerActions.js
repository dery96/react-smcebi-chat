import { axios } from 'axios';

export userActions = {
  userRegisterRequest
}

function userRegisterRequest(userData) {
  return dispatch => {
    return axios.post('localhost:7171/account/new/', userData)
  };
}

