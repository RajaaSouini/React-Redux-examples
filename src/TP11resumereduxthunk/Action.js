import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER';
 export const fetchUsers=()=>{
    return async(dispatch)=>{
        const response = await axios ("https://jsonplaceholder.typicode.com/users")
        dispatch({
            type:FETCH_USERS,
            payload:response.data,
            })
  }
}

export const DeleteUser=(id)=>{
    return{
        type:DELETE_USER,
        payload:id
    }
}

export const UpdateUser = (Data) => {
    return {
        type: UPDATE_USER,
        payload: Data
    }
}
export const AddUser = (newUser) => {   
    return {
        type: ADD_USER,
        payload: newUser
    }
}