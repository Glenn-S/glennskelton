import { combineReducers } from 'redux';
import activeLinkReducer from './activeLinkReducer';
import authReducer from './authReducer';

export default combineReducers({
  activeLink: activeLinkReducer,
  auth: authReducer,
});