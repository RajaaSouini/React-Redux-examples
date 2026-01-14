import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function ListePayes() {
    const [inf, setInfo] = useState([])
    useEffect(() => {
         axios.get("https://restcountries.com/v3.1/all?fields=name,capital,currencies").then((res) => {setInfo(res.data)})
    }, [])

 

    return (
        <div>
            <h1>Agence de Voyage Redux</h1>
            <h2>Liste des Pays</h2>
 
                <table border="1">
                    <thead>
                        <tr  >
                            <th>Nom</th>
                             <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {inf.map((pays, index) => (
                            <tr key={index}>
                                <td>{pays.name?.common}</td>
                                <td>
                                    <Link to={`/Inscription/${pays.name?.common}`}>
                                        Suite
                                    </Link>
                                </td>
                             </tr>
                        ))}
                    </tbody>
                </table>
            
        </div>
    )
}

export default ListePayes