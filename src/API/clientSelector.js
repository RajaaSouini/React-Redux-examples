
import { createSelector } from "reselect";
export const selectAllClients = (state) => state.clientState.clients;
export const selectClientByEmail = (email)=>
    createSelector([selectAllClients], (clients)=>
    clients.filter((client)=> client.email === email));