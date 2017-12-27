import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';
import axios from 'axios';
import queryForParams from '../helpers/queryForParams';
import { urlConstants } from '../constants/url.constants';

promisePolyfill.polyfill();

// function testAsync() {
//   return fetch('http://date.jsontest.com/')
//     .then(response => response.json());
// }

function testAsync() {
  return fetch('http://localhost:7171/account/new/', {
    login: 'akacja',
    password: '111',
    nickname: 'AkacjaMala',
    gender: 'M',
  })
    .then(response => response.json());
}

function userLogin(username, password) {
    return axios.post( urlConstants.LOGIN_URL,
            queryForParams({
                login: username,
                password: password,
            }),
            urlConstants.REQUEST_CONFIG,
        )
}

export default {
  testAsync,
  userLogin,
  // testServerConnection,
};
