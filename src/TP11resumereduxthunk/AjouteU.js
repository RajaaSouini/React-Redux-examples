import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddUser } from "./Action"
function Adduser(){
    const [user,setUser]=useState({ 
         name:"",
         username:"",
         email:""
    })
 
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(AddUser(user))
        alert("user ajouté avec succès")
        }

return(
    <div>
        <form onSubmit={handleSubmit}>
            Nom: <input type="text" onChange={(e)=>setUser({...user,name:e.target.value})}/><br/>
            Username: <input type="text" onChange={(e)=>setUser({...user,username:e.target.value})}/> <br/>
            Email: <input type="text" onChange={(e)=>setUser({...user,email:e.target.value})}/><br/>
            <button type="submit">Ajouter</button>
        </form>
    </div>  
    )}
export default Adduser