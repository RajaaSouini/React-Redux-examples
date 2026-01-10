import { useState } from "react"
import { useSelector } from "react-redux"
import { selectClientByville } from "./Selecteurs"

function RechercheVille(){
    const [ville, setVille] = useState("")
    const clientsFiltres = useSelector(selectClientByville(ville))
    
    function VilleChenge(e){
        setVille(e.target.value)
    }
    
    return(<>
        <h1>Recherche par Ville</h1>
        <input 
            type="text" 
            value={ville}
            onChange={VilleChenge}
         />
        
        {ville && (
            <div>
                <h2>Résultats de la recherche  </h2>
                     <table border="1">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Téléphone</th>
                                <th>Ville</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientsFiltres.map((client, index) => (
                                <tr key={index}>
                                    <td>{client.nom}</td>
                                    <td>{client.tel}</td>
                                    <td>{client.ville}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
   
            </div>
        )}
    </>)
}

export default RechercheVille