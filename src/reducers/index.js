import { combineReducers } from 'redux';
import { ACTIVE_LINK } from '../actions/definitions';

const activeLinkReducer = (activeLink = 'home', action) => {
  switch (action.type) {
    case ACTIVE_LINK:
      return {
        actionLink: action.payload,
      };
    default:
      return activeLink;
  }
};

export default combineReducers({
  activeLink: activeLinkReducer,
});