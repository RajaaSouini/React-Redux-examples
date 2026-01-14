export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
 export const fetchUsers=()=>{
  return async(dispatch)=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    const datalimit=data.slice (0,5);
    dispatch({
      type:FETCH_USERS,
      payload:datalimit,
    })
  }
 }
  export const deleteUser=(id)=>{  
    return{
      type:DELETE_USER,
      payload:id,
    }
  }
  export const updateUser=(updatedUser)=>{  
    return{
      type:UPDATE_USER,
      payload:updatedUser,
    }
  }
