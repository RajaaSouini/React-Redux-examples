import { ADD_INSCRIT } from './inscriptionActions';

const initialState = {
  inscriptions: [],
};

const inscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INSCRIT:
      return {
        ...state,
        inscriptions: [...state.inscriptions, action.payload],
      };
    default:
      return state;
  }
};

export default inscriptionReducer;


