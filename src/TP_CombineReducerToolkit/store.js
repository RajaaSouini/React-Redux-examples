import { combineReducers, createStore } from "redux";

import clientReducer from "./ClientReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
    clientState : clientReducer,
    productState : productReducer,
})

const store = createStore(rootReducer);

export default store;
