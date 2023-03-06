import { useEffect, useState } from "react";
import Todo from "../types/Todo";
import AddTodoForm from "./AddTodoForm";
import SingleTodo from "./SingleTodo";
import { nanoid } from "nanoid";

export default function TodosList() {
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (newTodo: string) => {
    if (newTodo)
      setTodos([
        ...todos,
        { id: nanoid(), todo: newTodo, isDone: false, isImportant: false },
      ]);
  };

  const sortTodos = () => {
    setTodos((oldTodos) => {
      const newArray: Todo[] = [];
      for (let i = 0; i < oldTodos.length; i++) {
        if (oldTodos[i].isImportant) {
          newArray.unshift(oldTodos[i]);
        } else {
          newArray.push(oldTodos[i]);
        }
      }
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
    sortTodos();
  };

  return (
    <>
      <AddTodoForm handleAdd={handleAdd} />
      <div className="todos__container">
        {todos.map((t) => (
          <SingleTodo
            todo={t}
            key={t.id}
            handleDelete={handleDelete}
            handleDone={handleDone}
            handleImportant={handleImportant}
          />
        ))}
      </div>
    </>
  );
}
