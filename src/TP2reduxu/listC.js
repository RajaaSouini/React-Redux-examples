import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { SupprimeC } from "./action"

function ListClient(){
const client=useSelector((state)=>state.Client)

const dispatch=useDispatch()
function handleClick(index){
  dispatch(SupprimeC(index))
}
return(<>
<h1>Liste des Clients</h1>
<table border="1">
    <tr>
        <th>id</th>
        <th>nom</th>
        <th>tel</th>
        <th>ville</th>
        <th>Supprime</th>
    </tr>
 {client.map((c,index)=>{
    return(<tr key={index}>
        <td>{index+1}</td>
        <td>{c.nom}</td>
        <td>{c.numtel}</td>
        <td>{c.ville}</td>
        <td><button onClick={()=>handleClick(index)}>Supprime</button></td>

    </tr>)

 }
 
)}
</table>
</>)
}export default ListClient