import {FETCH_USERS} from './action';
const initialState= {
  users: [],
};
export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
