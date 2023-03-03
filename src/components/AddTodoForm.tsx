import { ChangeEvent, FormEvent, useState } from "react";
import TodoForm from "../types/AddTodoForm";
import "./style.css";

const AddTodoForm = ({ handleAdd }: TodoForm) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        className="input__box"
        type="input"
        placeholder="Enter a task"
        value={newTodo}
        onChange={handleChange}
      ></input>
      <button className="input__sumbit">+</button>
    </form>
  );
};

export default AddTodoForm;
