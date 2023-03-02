import TodoForm from "../types/AddTodoForm";
import "./style.css";

const AddTodoForm = ({ todo, handleChange, handleAdd }: TodoForm) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        className="input__box"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={handleChange}
      ></input>
      <button className="input__sumbit">+</button>
    </form>
  );
};

export default AddTodoForm;
