import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addClient } from "./actions";

const ClientForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const dispatch = useDispatch();
    const addClient = (name , email) => {
        dispatch({type: 'ADD_CLIENT', payload : {name, email}});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addClient({ name, email }));
        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type="submit">Ajouter client</button>
        </form>
    );
};

export default ClientForm;
