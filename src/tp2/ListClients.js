import React from "react";
import { useDispatch , useSelector } from "react-redux";

const ClientList = () => {
    const clients = useSelector((state) =>
    state.clients);
    const dispatch = useDispatch();
    const handleDelete = (email) =>{

    };
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Nom:</th>
                    <th>Email :</th>
                    <th>Action :</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client , index)=>(
                    <tr key={index}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ClientList ;