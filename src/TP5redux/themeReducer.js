import { TOGGLE_THEME } from "./action";

const initialThemeState = "light";

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

export default themeReducer;


