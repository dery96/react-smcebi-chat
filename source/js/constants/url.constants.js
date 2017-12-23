export const WEBSITE_URL = 'http://localhost:7171';
export const REQUEST_CONFIG = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
// ACCOUNT URLS
export const LOGIN_URL = `${WEBSITE_URL}/account/login/`;
export const NEW_ACCOUNT_URL = `${WEBSITE_URL}/account/new/`;
export const CHANGE_PASSWORD_URL = `${WEBSITE_URL}/account/change/password/`;
export const CHANGE_NICKNAME_URL = `${WEBSITE_URL}/account/change/nickname/`;

// CHANNEL URLS
export const NEW_CHANNEL_URL = `${WEBSITE_URL}/channel/new/`;
export const DELETE_CHANNEL_URL = `${WEBSITE_URL}/channel/delete/`;
export const ALL_CHANNELS_URL = `${WEBSITE_URL}/channel/all/`;

// USER URLS
export const ALL_USERS_ACTIVE_URL = `${WEBSITE_URL}/users/all/`;

// CHAT URLS
export const CHAT_URL = `${WEBSITE_URL}/chat/`;
