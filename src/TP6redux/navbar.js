import { Link } from "react-router-dom"
function Navbar(){
    return(
    <nav>
         <Link to="/Recherche">Recherche par Ville</Link><br/>
        <Link to="/listC"> list Ville</Link>
    </nav>
    )
        
}
export default Navbar