import { handleShowOptions } from "../onclick/handleOptions";
import TodoForm from "./TodoForm";
import TodoOptions from "./TodoOptions";

const Todo = ({
  id,
  text,
  toggle,
  setToggle,
  editing,
  setEditing,
  completed,
  setCompleted,
  data,
  setLoading,
  setStat,
  setData,
  todoText,
  setTodoText,
}) => {
  return (
    <div className={completed[`completed${id}`] ? "completed" : "todo"}>
      <span
        className="options"
        onClick={() => handleShowOptions(toggle, setToggle, id)}
      >
        options
      </span>

      {toggle[id] && (
        <TodoOptions
          id={id}
          setEditing={setEditing}
          editing={editing}
          completed={completed}
          setCompleted={setCompleted}
          text={text}
          setTodoText={setTodoText}
        />
      )}

      {editing.slice(7) === String(id) ? (
        <TodoForm
          data={data}
          setLoading={setLoading}
          setStat={setStat}
          setData={setData}
          todoText={todoText}
          setTodoText={setTodoText}
          id={id}
          setEditing={setEditing}
          text={text}
          editing={editing}
        />
      ) : (
        <div className="todo-text">{text}</div>
      )}
    </div>
  );
};

export default Todo;
