import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClientForm from "./ClientForm";
import Accueil from "./Accueil";
import ClientList from "./ListClients";
import ClientSearch from "./RechercherClient";
import ProductForm from "./ProductForm";
import ProduitList from "./ListProduit";
function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/Accueil">Accueil</Link> |{" "}
                <Link to="/ClientForm">Ajouter client</Link> |{" "}
                <Link to="/ListClients">Liste clients</Link> |{" "}
                <Link to="/RechercherClient">Rechercher</Link> |{""}
                <Link to="/ProductForm">Ajouter produit</Link>
                <Link to="/ListProduit">Liste produits</Link>
            </nav>

            <Routes>
                <Route path="/Accueil" element={<Accueil />} />
                <Route path="/ClientForm" element={<ClientForm />} />
                <Route path="/ListClients" element={<ClientList />} />
                <Route path="/RechercherClient" element={<ClientSearch />} />
                <Route path="/ProductForm" element={<ProductForm />} />
                <Route path="/ListProduit" element={<ProduitList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
