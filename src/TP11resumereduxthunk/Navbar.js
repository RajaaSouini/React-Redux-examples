import { Link } from "react-router-dom"

function Navbar(){
    return(
    <nav>
         {/* <Link to="/">Ajouter User</Link> <br/> */}
        {/* <Link to="/recherchC">Recherche User</Link><br/> */}
        <Link to="/AjouteU"> Ajouter User</Link> <br/>
        <Link to="/Recheche"> Recherche User</Link><br/>
        <Link to="/"> Liste des Users</Link> 
    </nav>
    )
        
}
export default Navbar