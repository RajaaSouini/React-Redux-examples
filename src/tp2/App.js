import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClientForm from "./ClientForm";
import Accueil from "./Accueil";
import ClientList from "./ListClients";

function App() {
  return (
    <BrowserRouter>
      <Link to="/Accueil">Accueil</Link> <br />
      <Link to="/ClientForm">Ajouter client</Link> <br />
      <Link to="/ClientList">Liste des clients</Link>

      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/ClientForm" element={<ClientForm />} />
        <Route path="/ClientList" element={<ClientList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
