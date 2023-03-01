import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { nanoid } from "nanoid";
import Todo from "./module";
import TodosList from "./components/TodosList";
import ReactSwitch from "react-switch";
// import { createContext } from "vm";

export const ThemeContext = React.createContext("light");

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const [theme, setTheme] = useState<string>("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAdd(e: React.SyntheticEvent) {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        { id: nanoid(), todo: todo, isDone: false, isImportant: false },
      ]);
      setTodo("");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <h1>Todo List</h1>
        <div className="theme__switch">
          <p>Dark mode</p>
          <ReactSwitch
            onChange={() => toggleTheme()}
            checked={theme === "light"}
          />
        </div>
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodosList todos={todos} setTodos={setTodos} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
