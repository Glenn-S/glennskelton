import { ACTIVE_LINK, SIGN_IN, SIGN_OUT } from './definitions';

export const activeLink = activeLink => {
  return {
    type: ACTIVE_LINK,
    payload: activeLink
  };
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};