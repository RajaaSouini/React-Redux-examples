import { useSelector } from "react-redux"

function ListeInscriptions() {
    const inscriptions = useSelector(state => state.inscription.inscriptions)

    return (
        <div>
            <h1>Agence de Voyage Redux</h1>
            <h2>Liste des Inscriptions</h2>
            
         
                <p>Aucune inscription pour le moment.</p>
           
                <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f0f0f0' }}>
                            <th>Nom du Pays</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inscriptions.map((inscription, index) => (
                            <tr key={index}>
                                <td>{inscription.nomPays}</td>
                                <td>{inscription.nom}</td>
                                <td>{inscription.prenom}</td>
                                <td>{inscription.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
 
        </div>
    )
}

export default ListeInscriptions

