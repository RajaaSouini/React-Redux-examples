import { AJOUTER_STAGIAIRE } from "./action";

const initialStagiaireState = {
  liste: [],
};

function stagiaireReducer(state = initialStagiaireState, action) {
  switch (action.type) {
    case AJOUTER_STAGIAIRE:
      return {
        ...state,
        liste: [...state.liste, action.payload],
      };
    default:
      return state;
  }
}

export default stagiaireReducer;