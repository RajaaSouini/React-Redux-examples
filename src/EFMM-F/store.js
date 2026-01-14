import { createStore, combineReducers } from 'redux'
import inscriptionReducer from './inscriptionReducer'

const rootReducer = combineReducers({
    inscription: inscriptionReducer
})

const store = createStore(rootReducer)

export default store

