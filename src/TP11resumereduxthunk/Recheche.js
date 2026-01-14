import { useState } from "react"
import { useSelector } from "react-redux"
 import { selectClientByusers } from "./selecteur"

function RechercheUser(){
    const [User, setUser] = useState("")
    const usersFiltres = useSelector(selectClientByusers(User))
    function UserChenge(e){
        setUser(e.target.value)
    }
    
    return(<div>
        <h1>Recherche par User</h1>
        <input 
            type="text" 
            value={User}
            onChange={UserChenge}
         />
        
        {User && (
            <div>
            <h2>Résultats de la recherche  </h2>
                <table border="1">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersFiltres.map((user, id) => (
                        <tr key={id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                        ))}
                </tbody>
                </table>
            </div>
        )}
    </div>)
}

export default RechercheUser