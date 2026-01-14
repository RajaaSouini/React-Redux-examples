import { combineReducers } from "redux";
import stagiaireReducer from "./stagiareReducer";
import formateurReducer from "./formateurReducer";

const Reducer = combineReducers({
  stagiaire: stagiaireReducer,
  formateur: formateurReducer,
});

export default Reducer;
