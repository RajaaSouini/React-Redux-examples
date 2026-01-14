// Types d'actions pour TP5
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_THEME = "TOGGLE_THEME";

// Action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

