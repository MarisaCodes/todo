import { handleSubmit } from "../onsubmit/handleSubmit";

const TodoForm = ({
  data,
  setLoading,
  setStat,
  setData,
  todoText,
  setTodoText,
  id,
  setEditing,
  editing,
}) => {
  return (
    <form
      className="form"
      onSubmit={(e) =>
        handleSubmit(
          e,
          "db",
          setLoading,
          setTodoText,
          setStat,
          data,
          setData,
          todoText,
          setEditing,
          id
        )
      }
    >
      <input
        className="input"
        autoComplete="off"
        type="text"
        placeholder="Write your todo..."
        value={todoText}
        required
        onChange={(e) => setTodoText(e.target.value)}
      />
      <input type="submit" value={editing ? "Edit" : "Add"} className="btn" />
    </form>
  );
};

export default TodoForm;
