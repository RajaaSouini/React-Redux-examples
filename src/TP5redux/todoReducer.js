import { ADD_TODO, REMOVE_TODO } from "./action";

const initialTodoState = {
  items: [],
};

function todoReducer(state = initialTodoState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, { id: Date.now(), text: action.payload }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;

