import { combineReducers } from 'redux';
import { ACTIVE_LINK } from '../actions/definitions';

const activeLinkReducer = (activeLink = null, action) => {
  if (action.type === ACTIVE_LINK) {
    return action.payload;
  } else {
    return activeLink;
  }
};

export default combineReducers({
  activeLink: activeLinkReducer,
});