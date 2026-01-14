import { Link } from "react-router-dom"
function Navbar(){
    return(
    <nav>
         <Link to="/">Ajout Client</Link> <br/>
         <Link to="/listC"> Liste des Clients</Link> <br/>
         <Link to="/recherchC"> Recherche par ville</Link>
    </nav>
    )
        
}
export default Navbar