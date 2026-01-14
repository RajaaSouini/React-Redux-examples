import { createSelector } from "reselect";
export const SelectAllClients = (state) => state.Client.value;

export const selectClientByville = (ville) =>
    createSelector([SelectAllClients], (clients) =>
        clients.filter((client) => client.ville === ville));