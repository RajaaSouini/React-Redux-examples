import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterClients } from "./actions";

const ClientSearch = () => { 
    const dispatch = useDispatch();
    const filteredClients = useSelector(
        (state) => state.filteredClients
    );

    return (
        <div>
            <h2>Rechercher client par email</h2>

            <input
                type="text"
                placeholder="Email"
                onChange={(e) => dispatch(filterClients(e.target.value))}
            />

            <ul>
                {filteredClients.map((client, index) => (
                    <li key={index}>
                        {client.name} - {client.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientSearch;
