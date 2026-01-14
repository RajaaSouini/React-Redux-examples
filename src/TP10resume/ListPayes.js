 import { Link } from "react-router-dom";
import { fetchUsers } from "./action";
import { deleteUser } from "./action";
 import { useDispatch,useSelector } from "react-redux";
  export default function ListeUsers() {
  const data= useSelector((state)=>state.users);
  const dispatch= useDispatch();
function handekClick() {
  dispatch(fetchUsers());
}
function handleDelete(id) {
  dispatch(deleteUser(id));
}
  return (  
     <>
  
         <h1>Liste utilisateurs</h1>
         <button onClick={handekClick}>Démarage</button>
         {data.length===0 ? <h3>Aucun utilisateur</h3>:
         <table border="1">
          <thead><tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>action</th>
              </tr>
              </thead>
          <tbody> 
         {data.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
             <td><button onClick={() => handleDelete(user.id)}>Supprimer</button>
             <Link to={`/update/${user.id}`}>update</Link>
             </td>   

          </tr>
         ))}
         </tbody>
          
         </table>
          }

         </>
         
        )
 
  
 }