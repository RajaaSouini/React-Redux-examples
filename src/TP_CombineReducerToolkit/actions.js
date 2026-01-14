

export const ADD_CLIENT = "ADD_CLIENT";
export const FILTER_CLIENTS = "FILTER_CLIENTS";
export const DELETE_CLIENT = "DELETE_CLIENT";

export const ADD_PRODUIT = "ADD_PRODUIT";
export const DELETE_PRODUIT = "DELETE_PRODUIT";



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

export const addProduit = (produit) => ({
    type : ADD_PRODUIT,
    payload : produit ,
});

export const deleteProduit = (price) =>({
    type : DELETE_PRODUIT,
    payload : price,
})
