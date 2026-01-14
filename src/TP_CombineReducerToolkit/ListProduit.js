import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteProduit } from "./actions";
import { selectAllProducts } from "./productSelector";
const ProduitList = () => {
    //const produits = useSelector((state) => state.productState.produits);
    const dispatch = useDispatch();
    const produits = useSelector(selectAllProducts)

    const handleDelete = (price)=> {
        dispatch(deleteProduit(price));
    }
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {produits.map((produit, index) => (
                    <tr key={index}>
                        <td>{produit.name}</td>
                        <td>{produit.price}</td>
                        <td>
                            <button
                                onClick={() =>
                                    handleDelete(produit.price)
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

export default ProduitList;
