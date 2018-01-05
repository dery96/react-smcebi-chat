
export const WEBSITE_URL = 'http://localhost:7171';
export const urlConstants = {
  REQUEST_CONFIG: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },

  // ACCOUNT URLS
  LOGIN_URL: WEBSITE_URL + '/account/login/',
  LOGOUT_URL: WEBSITE_URL + '/account/logout/',
  NEW_ACCOUNT_URL: WEBSITE_URL + '/account/new/',
  CHANGE_PASSWORD_URL: WEBSITE_URL + '/account/change/password/',
  CHANGE_NICKNAME_URL: WEBSITE_URL + '/account/change/nickname/',

  // CHANNEL URLS
  NEW_CHANNEL_URL: WEBSITE_URL + '/channel/new/',
  DELETE_CHANNEL_URL: WEBSITE_URL + '/channel/delete/',
  ALL_CHANNELS_URL: WEBSITE_URL + '/channel/all/',
  SUBSCRIBE_CHANNEL_URL: WEBSITE_URL + '/channel/subscribe/',

  // USER URLS
  ALL_USERS_ONLINE_URL: WEBSITE_URL + '/users/online/all/',
  ALL_USERS_URL: WEBSITE_URL + '/users/all/',

  // CHAT URLS
  CHAT_URL: 'ws://localhost:7171/chat/',
};

export default urlConstants;
