import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

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

export default {
  testAsync,
  // testServerConnection,
};
