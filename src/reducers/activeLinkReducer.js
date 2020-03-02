import { ACTIVE_LINK } from '../actions/definitions';

const INITIAl_STATE = {
  isActive: 'home'
};

export default (state =  INITIAl_STATE, action) => {
  //console.log('I\'m here ' + action.type);
  switch (action.type) {
    case ACTIVE_LINK:
      //console.log(action.payload);
      return {
        ...state,
        isActive: action.payload,
      };
    default:
      //console.log(state);
      return state;
  }
};