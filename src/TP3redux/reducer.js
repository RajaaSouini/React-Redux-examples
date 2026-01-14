import { AjouterClient, SupprimeClient, RechercheVille } from "./action";
import { produce } from "immer";

const initialstate = {
  Client: []
};

export default function Creducer(state = initialstate, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AjouterClient:
        draft.Client.push(action.payload);
        break;

      case SupprimeClient:
        draft.Client = draft.Client.filter(C => C.nom !== action.payload.nom);
        break;

      case RechercheVille:
        draft.Client = draft.Client.filter(
          (C) => C.ville === action.payload.ville
        );
        break;
      default:
         break;
    }
  });
}