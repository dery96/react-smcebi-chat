import axios from 'axios';
import qs from 'qs';
//
// export const userRegisterActions = {
//   userRegisterRequest
// }
const config = { headers: { 'Content-Type': 'x-www-form-urlencoded' } };

export function userRegisterRequest(userData) {
  console.log(userData);
  return dispatch( axios.post(
    'http://localhost:7171/account/new/',
    qs.stringify(userData)),
  )
}
