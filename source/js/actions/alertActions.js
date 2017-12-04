import { alertConstants } from '../constants';

function success(message) {
  return { type: alertConstants.SUCCESS, text: message };
}

function error(message) {
  return { type: alertConstants.ERROR, text: message };
}

function clear(message) {
  return { type: alertConstants.CLEAR, text: message };
}

const alertActions = {
  success,
  error,
  clear,
}

export default alertActions;
