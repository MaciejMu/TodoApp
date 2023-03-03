import Todo from "../types/Todo";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineExclamation } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  handleDelete: (id: string) => void;
  handleDone: (id: string) => void;
  handleImportant: (id: string) => void;
}

export default function SingleTodo({
  todo,
  handleDone,
  handleDelete,
  handleImportant,
}: Props) {
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
