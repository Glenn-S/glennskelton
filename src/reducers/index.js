import { combineReducers } from 'redux';
import activeLinkReducer from './activeLinkReducer';

export default combineReducers({
  activeLink: activeLinkReducer,
});