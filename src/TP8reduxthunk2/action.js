export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
        }
    };
};

