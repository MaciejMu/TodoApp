import React from "react";
import Todo from "../types/Todo";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodosList({ todos, setTodos }: Props) {
  return (
    <div className="todos__container">
      {todos.map((t) => (
        <SingleTodo todo={t} todos={todos} key={t.id} setTodos={setTodos} />
      ))}
    </div>
  );
}
