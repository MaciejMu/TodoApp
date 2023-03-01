import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SyntheticEvent) => void;
}

export default function Input({ todo, setTodo, handleAdd }: Props) {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        className="input__box"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input__sumbit">+</button>
    </form>
  );
}
