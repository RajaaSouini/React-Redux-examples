 // Types d'Actions
 export const LOGIN = 'LOGIN';
 export const LOGOUT = 'LOGOUT';
 // Action Creators
 export const loginUser = (userData) => ({
 type: LOGIN,
 payload: userData, // Ex: { id: 1, name: 'Alice' }
 });
 export const logoutUser = () => ({
 type: LOGOUT,
 });