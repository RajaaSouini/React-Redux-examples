import React, { useState } from "react";
import { useDispatch } from "react-redux";


const ProductForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const addProduit= (name , price)=> {
        dispatch({
            type : "ADD_PRODUIT",
            payload : {name , price}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addProduit(name , price);
        setName("");
        setPrice("");
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
                type="number"
                placeholder="Prix"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />

            <button type="submit">Ajouter produit</button>
        </form>
    );
};

export default ProductForm;