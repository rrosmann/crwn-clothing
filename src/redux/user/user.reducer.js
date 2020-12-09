import { USER_REDUCER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REDUCER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    case USER_REDUCER_ACTION_TYPES.SET_CURRENT_USER_TO_NULL:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
