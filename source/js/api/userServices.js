import { axios } from 'axios';

export default {
    login,
}

function login(username, password) {
    const request = axios.post(LOGIN, params, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    return request
}
