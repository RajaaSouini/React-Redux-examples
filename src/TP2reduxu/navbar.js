import { Link } from "react-router-dom"
function Navbar(){
    return(
    <nav>
         <Link to="/">Ajout Client</Link> <br/>
        <Link to="/recherchC">Recherche par Ville</Link><br/>
        <Link to="/listC"> list Ville</Link>
    </nav>
    )
        
}
export default Navbar