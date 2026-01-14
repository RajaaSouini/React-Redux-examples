import { ADD_PRODUIT , DELETE_PRODUIT } from "./actions";
const initialState = {
    produits : [],
};

const productReducer = (
    state = initialState, action
) => {
    switch(action.type){
        case ADD_PRODUIT :
            const updatedProduit = [...state.produits, action.payload];
            return {
                ...state,
                produits : updatedProduit,
            }
        case DELETE_PRODUIT:
            const remainingProduits = state.produits.filter(
                (produits) => produits.price !== action.payload
            );
            return{
                ...state ,
                produits : remainingProduits,
            }
        default:
            return state;

    }
}
export default productReducer;