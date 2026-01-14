import { FETCH_USERS , DELETE_USER , UPDATE_USER,ADD_USER} from "./Action";

const initialState = { 
    users: []
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                )
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        default:
            return state;
    }
};