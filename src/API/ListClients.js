import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ClientList = ()=> {
    const dispatch = useDispatch();
    const [clients , setClients] = useState([]);
    const fetchUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
           
            //simplifier data
            const dataSimplif = [];
            data.map(user => (dataSimplif.push({name:user.name , email : user.email})));
            
            //envoyer data
            dispatch({type:'SAVE_CLIENTS' , payload: dataSimplif});
        }catch(error){
            console.log(error);
        };
    }
    return(
        <React.Fragment>
            <button onClick={fetchUser}>Charger les utilisateurs</button>
            <ol>
                {clients.map(user=> (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ol>
        </React.Fragment>
    );
}
export default ClientList;