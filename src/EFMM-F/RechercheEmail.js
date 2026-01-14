import { useState } from "react"
import { useSelector } from "react-redux"
 
function RechercheEmail() {
    const inscriptions = useSelector(state => state.inscription.inscriptions)
    const [email, setEmail] = useState('')
    
     const inscriptionsFiltrees = email 
        ? inscriptions.filter(inscription => inscription.email === email)
        : []

    return (
        <div >
            <h1>Agence de Voyage Redux</h1>
            <h2>Recherche par Email</h2>
            
            <div>
                <label>Email: </label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                 />
            </div>
            
            {!email ? (
                <p>Veuillez entrer un email pour rechercher les inscriptions.</p>
            ) : inscriptionsFiltrees.length === 0 ? (
                <p>Pas d'inscription</p>
            ) : (
                <div>
                    <h3>Liste des inscriptions {inscriptionsFiltrees} pour {email}:</h3>
                    {inscriptionsFiltrees.map((inscription, index) => (
                        <h1 key={index}>
                            {inscription.nomPays}
                        </h1>
                    ))}
                </div>
            )}
        </div>
    )
}

export default RechercheEmail

