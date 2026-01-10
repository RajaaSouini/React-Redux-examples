import {Route,Routes} from "react-router-dom";
import AjoutClient from "./AjoutC";
import ListClient from "./listC";
import Navbar from "./navbar";
function App(){
    return(<>
    <Navbar/>
    <Routes>
        <Route path="/" element={<AjoutClient/>}/>
        <Route path="/listC" element={<ListClient/>}/> 
        </Routes> 
    </>
   )
    
    
 }export default App