import { USER_REDUCER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) => ({
  type: USER_REDUCER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const setCurrentUserToNull = () => ({
  type: USER_REDUCER_ACTION_TYPES.SET_CURRENT_USER_TO_NULL,
});
