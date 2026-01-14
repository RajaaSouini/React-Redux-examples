import { LOGIN, LOGOUT } from './actions';
 const initialAuthState = {
 isAuthenticated: false,
 user: null, 
};
 export default function authReducer(state = initialAuthState, action) {
 switch (action.type) {
 case LOGIN:
 return {
 ...state, // Copie de l'état existant
 isAuthenticated: true,
 user: action.payload,
 };
 case LOGOUT:
 return initialAuthState; // Réinitialisation complète
 default:
 return state;
 }
 }