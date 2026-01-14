 import { FETCH_USERS } from "./action";
  import { DELETE_USER } from "./action";
  import { UPDATE_USER } from "./action";
 const initialState = {
   users: [],
 };
  export const CountriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return {
          ...state,
          users: action.payload,
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
      default:
        return state;
    }
  };
