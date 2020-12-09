export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});

export const setCurrentUserToNull = () => ({
  type: 'SET_CURRENT_USER_TO_NULL',
});
