import React from "react";
import Todo from "../types/Todo";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineExclamation } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function SingleTodo({ todo, todos, setTodos }: Props) {
  function sortImportant() {
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
  }

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
    sortImportant();
  };

  return (
    <form
      className={
        todo.isImportant
          ? "todo__single todo__single--important"
          : "todo__single"
      }
    >
      {todo.isDone ? (
        <s className="todo__single--text todo__single--done">{todo.todo}</s>
      ) : (
        <span className="todo__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <VscTrash />
        </span>
        <span className="icon" onClick={() => handleImportant(todo.id)}>
          <AiOutlineExclamation />
        </span>
      </div>
    </form>
  );
}
