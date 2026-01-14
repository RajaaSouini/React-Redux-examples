import React from 'react';
 import { useSelector, useDispatch } from 'react-redux';
 import { loginUser, logoutUser } from './actions'; 
function App() {
 // Lecture de l'état
 const isAuthenticated = useSelector((state) => state.isAuthenticated);
 const user = useSelector((state) => state.user);
 // Fonction de modification
 const dispatch = useDispatch();
 const handleLogin = () => {
 // Simule la réception des données utilisateur après une API call réussie
 const userData = { id: 42, name: 'Jean Dupont' };
 dispatch(loginUser(userData));
 };
 const handleLogout = () => {
 dispatch(logoutUser());
 };
 return (
 <div style={{ padding: '20px' }}>
 <h2>État d'Authentification Global</h2>
 {/* Affichage conditionnel basé sur l'état Redux */}
 {isAuthenticated ? (
 <>
 <p>Statut :  
✅
 Connecté
 </p>
 <h3>Bienvenue, {user.name} (ID: {user.id})</h3>
 <button onClick={handleLogout}>Se Déconnecter</button>
 </>
 ) : (
 <>
 <p>Statut :  
❌
 Déconnecté
 </p>
 <button onClick={handleLogin}>Se Connecter (Action Redux)</button>
 </>
 )}
 </div>
 );
 }
 export default App;