// reducer.js
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SET_ITEMS } from './actions';
const initialState = { items: [] };

export default function itemReducer(state = initialState, action) {
  switch(action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(i => i.id === action.payload.id ? action.payload : i)
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
}
