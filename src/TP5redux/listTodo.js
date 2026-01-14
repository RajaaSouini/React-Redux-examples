import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, toggleTheme, removeTodo } from "./action";

export default function ListTodo() {
  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleAddTodo = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text.trim()));
    setText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const isDark = theme === "dark";

  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      {/* Bloc thème seulement coloré */}
      <div
        style={{
          padding: "16px",
          marginBottom: "24px",
          borderRadius: "8px",
          backgroundColor: isDark ? "#222" : "#ece2e2ff",
          color: isDark ? "white" : "black",
        }}
      >
        <h2>Réglages de Thème</h2>
        <p>
          Le mode actuel est : <strong>{theme}</strong>
        </p>
        <button onClick={handleToggleTheme}>
          Passer en mode {isDark ? "light" : "dark"}
        </button>
      </div>

      {/* Bloc liste de tâches (couleur fixe) */}
      <div>
        <h2>Ma Liste de Tâches</h2>
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Ajouter</button>

        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              {t.text}{" "}
              <button onClick={() => handleRemoveTodo(t.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}