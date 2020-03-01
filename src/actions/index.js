import { ACTIVE_LINK } from './definitions';

export const activeLink = activeLink => {
  return {
    type: ACTIVE_LINK,
    payload: activeLink
  };
};