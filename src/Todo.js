import { handleShowOptions } from "./handleOptions";

const Todo = ({ arrTodos, toggle, setToggle }) => {
  return (
    <div className="todos">
      {arrTodos.map((todo) => (
        <div className="todo" key={todo.id}>
          <span
            className="options"
            onClick={(e) => {
              e.stopPropagation();
              handleShowOptions(toggle, setToggle, todo.id);
            }}
          >
            options
          </span>

          <div
            className="todo-options display"
            id={"todo" + todo.id}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="edit">Edit</div>
            <div className="delete">Delete</div>
          </div>

          <div className="todo-text">{todo.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
