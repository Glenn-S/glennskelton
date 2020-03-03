import { ACTIVE_LINK } from '../actions/definitions';

let path = window.location.pathname.replace('/', '');
var pathname = path !== '' ? path : 'home';

const INITIAl_STATE = {
  isActive: pathname
};

export default (state =  INITIAl_STATE, action) => {
  switch (action.type) {
    case ACTIVE_LINK:
      return {
        ...state,
        isActive: action.payload,
      };
    default:
      return state;
  }
};