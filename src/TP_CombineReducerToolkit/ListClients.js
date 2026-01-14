import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient } from "./actions";
import { selectAllClients } from "./clientSelector";

const ClientList = () => {
    //const clients = useSelector((state) => state.clientState.clients);
    const clients = useSelector(selectAllClients); 
    const dispatch = useDispatch();
    const handleDelete = (email)=> {
        dispatch(deleteClient(email));
    }

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client, index) => (
                    <tr key={index}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>
                            <button
                                onClick={() =>
                                    handleDelete(client.email)
                                }
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ClientList;
