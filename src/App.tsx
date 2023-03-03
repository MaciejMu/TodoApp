import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import { nanoid } from "nanoid";
import Todo from "./types/Todo";
import TodosList from "./components/TodosList";
import ReactSwitch from "react-switch";

export const ThemeContext = React.createContext("light");

function App() {
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (newTodo: string) => {
    if (newTodo)
      setTodos((oldTodos) => {
        const newArray: Todo[] = [];
        for (let i = 0; i < oldTodos.length; i++) {
          if (oldTodos[i].isImportant) {
            newArray.unshift(oldTodos[i]);
          } else {
            newArray.push(oldTodos[i]);
          }
        }
        newArray.push({
          id: nanoid(),
          todo: newTodo,
          isDone: false,
          isImportant: false,
        });
        return newArray;
      });
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleDone = (id: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  const handleImportant = (id: string) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isImportant: !t.isImportant } : t
      )
    );
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <h1>Todo List</h1>
        <div className="theme__switch">
          <p>Dark mode</p>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
        </div>
        <AddTodoForm handleAdd={handleAdd} />
        <TodosList
          todos={todos}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleImportant={handleImportant}
          // handleImportant={handleImportant}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
