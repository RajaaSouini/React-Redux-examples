import { useState } from "react"
import { useDispatch } from "react-redux"
import { AjoutC } from "./action"
function AjoutClient(){
    const [client,setClient]=useState({
         nom:"",
         numtel:"",
         ville:""
    })
 
    const dispatch=useDispatch();
     const handleSubmit=(e)=>{
       e.preventDefault();
      dispatch(AjoutC(client))
        }

return(<>
<form onSubmit={handleSubmit}>
    Nom: <input type="text" onChange={(e)=>setClient({...client,nom:e.target.value})}/><br/>
    Num tel: <input type="text" onChange={(e)=>setClient({...client,numtel:e.target.value})}/> <br/>
    Ville: <input type="text" onChange={(e)=>setClient({...client,ville:e.target.value})}/><br/>
    <button type="submit">Ajouter</button>
</form>
 </>)
}export default AjoutClient