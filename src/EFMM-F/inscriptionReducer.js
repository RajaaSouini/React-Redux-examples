import { ADD_INSCRIPTION } from './inscriptionActions'

const initialState = {
    inscriptions: []
}

const inscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INSCRIPTION:
            return {
                ...state,
                inscriptions: [...state.inscriptions, action.payload]
            }
        default:
            return state
    }
}

export default inscriptionReducer

