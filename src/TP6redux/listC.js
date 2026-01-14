
import { useSelector } from "react-redux";
function ListClient(){
    const Client=(useSelector((state)=>state.Client))
    return(
        <><h1>Liste des clients</h1>
        <table border="1">
            <tr> 
                <th>id</th>  
                <th>Noms</th>  
                 <th>Telephone</th> 
                <th>ville</th> 
            </tr>
            {Client.map((c,index)=>{
                return( 
                <tr key={index}>
                <td>{index}</td>
                    <td>{c.nom}</td>
                    <td>{c.tel}</td>
                    <td>{c.ville}</td>
                </tr>)
            })}
         </table>
        
        </>
    )
} export default ListClient