import axios from 'axios';

function createAccount(data) {
  return axios({
    method: 'post',
    url: 'localhost:7171/account/new/',
    ...data,
  });
}


export default createAccount;
