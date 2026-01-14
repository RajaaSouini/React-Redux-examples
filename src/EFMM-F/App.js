import { Routes, Route, NavLink, useParams } from "react-router-dom"
import ListePayes from "./ListePayes"
import FormInscription from "./Inscription"
import ListeInscriptions from "./ListeInscriptions"
import RechercheEmail from "./RechercheEmail"

function ListeInscriptionsWrapper() {
    const { email } = useParams()
    return <ListeInscriptions email={email ? decodeURIComponent(email) : ''} />
}

function App() {
    return (
        <div>
            <nav  >
                <NavLink to="/"  >
                    Liste des Pays
                </NavLink>
                <NavLink to="/liste-inscriptions" >
                    Liste des Inscriptions
                </NavLink>
                <NavLink to="/recherche-email" style={{ marginLeft: '15px' }}>
                    Recherche par Email
                </NavLink>
            </nav>
            
            <Routes>
                <Route path="/" element={<ListePayes />} />
                <Route path="/Inscription/:nomPays" element={<FormInscription />} />
                <Route path="/liste-inscriptions" element={<ListeInscriptions />} />
                <Route path="/recherche-email" element={<RechercheEmail />} />
            </Routes>
        </div>
    )
}

export default App

