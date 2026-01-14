import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "./Action";
import { DeleteUser } from "./Action";

function ListUsers(){
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.users)

    const handleSuppresion=(id)=>{
       if (window.confirm("Etes-vous sur de vouloir supprimer ?")) {
        dispatch(DeleteUser(id))
        
    }}
    return(
        <div>
            <h1>Liste des Users</h1>
            <button onClick={()=>dispatch (fetchUsers())}>Fetch Users</button>
            <table border="1">
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>username</th>
                    <th>email</th>
                    <th>Supprime</th>
                    <th>Modifier</th>
                </tr>
                {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><Link to="#" onClick={() => handleSuppresion(user.id)}>Supprimer</Link> </td>
                            <td> <Link to={`/UpdateUser/${user.id}`}>Modifier</Link></td>
                        </tr>
                )
                )}
            </table>
        </div>
    )
}
export default ListUsers;