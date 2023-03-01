import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { nanoid } from "nanoid";
import Todo from "./module";
import TodosList from "./components/TodosList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

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
    <div className="App">
      <h1>Todo List</h1>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
