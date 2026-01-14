import { AJOUTER_FORMATEUR } from "./action";

const initialFormateurState = {
  liste: [],
};

function formateurReducer(state = initialFormateurState, action) {
  switch (action.type) {
    case AJOUTER_FORMATEUR:
      return {
        ...state,
        liste: [...state.liste, action.payload],
      };
    default:
      return state;
  }
}

export default formateurReducer;