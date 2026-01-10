export const ADD_CLIENT = "ADD_CLIENT";
export const FILTER_CLIENTS = "FILTER_CLIENTS";
export const DELETE_CLIENT = "DELETE_CLIENT";

export const addClient = (client) => ({
    type: ADD_CLIENT,
    payload: client,
});

export const filterClients = (email) => ({
    type: FILTER_CLIENTS,
    payload: email,
});

export const deleteClient = (email) => ({
    type: DELETE_CLIENT,
    payload: email,
});
