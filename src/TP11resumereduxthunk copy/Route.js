import {BrowserRouter, Route,Routes} from "react-router-dom";

import Navbar from "./Navbar";
import ListUsers from "./ListUsers";
import EditUser from "./UpdateUser";
import Adduser from "./AjouteU";
import RechercheUser from "./Recheche";

function Users1(){
    return( 
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ListUsers/>}/>
                    <Route path="/AjouteU" element={<Adduser/>}/>
                    <Route path="/Recheche" element={<RechercheUser/>}/>
                    <Route path="/UpdateUser/:id" element={<EditUser/>}/>
                </Routes> 
            </div>
        </BrowserRouter>
   )}
export default Users1