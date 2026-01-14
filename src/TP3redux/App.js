import { Route, Routes } from "react-router-dom";
import AjoutClient from "./AjoutC";
import ListClient from "./listC";
import RechercheVille from "./recherchC";
import Navbar from "./navbar";
function App(){
    return(<>
    <Navbar/>
    <Routes>
        <Route path="/" element={<AjoutClient/>}/>
        <Route path="/listC" element={<ListClient/>}/> 
        <Route path="/recherchC" element={<RechercheVille/>}/> 
        </Routes> 
    </>
   )
    
    
 }export default App;