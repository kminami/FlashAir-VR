import { combineReducers } from 'redux';

function dir(state = "/", action) {
  switch(action.type) {
  case 'CHANGE_DIR':
    return action.payload;
  default:
    return state;
  }
}

function files(state = [], action) {
  switch(action.type) {
  case 'UPDATE_FILES':
    return action.payload;
  default:
    return state;
  }
}

function imagePath(state = '', action) {
  switch(action.type) {
  case 'SHOW_IMAGE':
    return action.payload;
  case 'HIDE_IMAGE':
    return '';
  default:
    return state;
  }
}

export default combineReducers({
  dir, files, imagePath,
});
