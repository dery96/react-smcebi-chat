import axios from 'axios';

export default {
    login,
}
let params = new URLSearchParams();
params.append('login', 'dery');
params.append('password', '111');

axios.post(LOGIN, params, config)
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});

function login(username, password) {
    const request = axios.post('localhost:7171/login/new/', {
        login: username,
        password: password,
    })
    .then(respone => {
        console.log(respone);
    })
    .catch(err => {
        console.log(err);
    })
    return request
}

function new_account(username, password) {
    const request = axios.post('localhost:7171/login/new/', {
        login: username,
        password: password,
    })
    .then(respone => {
        console.log(respone);
    })
    .catch(err => {
        console.log(err);
    })
    return request
}
