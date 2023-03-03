import React from "react";
import Todo from "../types/Todo";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  handleDelete: (id: string) => void;
  handleDone: (id: string) => void;
  handleImportant: (id: string) => void;
}

export default function TodosList({
  todos,
  handleDelete,
  handleDone,
  handleImportant,
}: Props) {
  return (
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
  );
}
