import handleClick from "./handleClick";
import { handleHideOptions, handleShowOptions } from "./handleOptions";

const Todo = ({ arrTodos, toggle, setToggle }) => {
  return (
    <div className="todos">
      {arrTodos.map((todo) => (
        <div
          className="todo"
          key={todo.id}
          id={"todo" + todo.id}
          onClick={() => handleClick(todo.id, "todo-text", "todo-text")}
        >
          <span
            className="options"
            onClick={(e) => {
              e.stopPropagation();
              handleHideOptions(toggle, setToggle);
              handleShowOptions(toggle, setToggle, todo.id);
            }}
          >
            options
          </span>

          <div
            className="todo-options display"
            id={"todo-options" + todo.id}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="edit">Edit</div>
            <div className="delete">Delete</div>
            <div
              className="option"
              onClick={() => handleClick(todo.id, "completed", "todo")}
            >
              Completed
            </div>
          </div>

          <div className="todo-text" id={"todo-text" + todo.id}>
            {todo.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
