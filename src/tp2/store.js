import { createStore } from "redux";
import { Provider } from "react-redux";
import clientReducer from "./ClientReducer";

const store = createStore(clientReducer);
export default store;