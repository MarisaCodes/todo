import { handleShowOptions } from "../onclick/handleOptions";
import TodoOptions from "./TodoOptions";

const Todo = ({ id, text, toggle, setToggle }) => {
  return (
    <div
      className={
        toggle[`completed${id}`] ? toggle[`completed${id}`][0] : "todo"
      }
    >
      <span
        className="options"
        onClick={() => handleShowOptions(toggle, setToggle, id)}
      >
        options
      </span>

      <TodoOptions id={id} toggle={toggle} setToggle={setToggle} />

      <div className="todo-text">{text}</div>
    </div>
  );
};

export default Todo;
