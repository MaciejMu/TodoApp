import React from "react";
import Todo from "../types/Todo";
import TodoOptions from "../types/TodoOptions";
import SingleTodo from "./SingleTodo";

interface Props extends TodoOptions {
  todos: Todo[];
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
