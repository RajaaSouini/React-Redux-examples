import {Route,Routes} from "react-router-dom";
import  RechercheVille from "./Recherche";
import ListClient from "./listC";
import Navbar from "./navbar";
function App(){
    return(<>
    <Navbar/>
    <Routes>
         <Route path="/Recherche" element={< RechercheVille/>}/>
        <Route path="/listC" element={<ListClient/>}/> 
        </Routes> 
    </>
   )
    
    
 }export default App