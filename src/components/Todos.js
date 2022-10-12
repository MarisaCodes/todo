import Todo from "./Todo";

const Todos = ({
  arrTodos,
  toggle,
  setToggle,
  editing,
  setEditing,
  completed,
  setCompleted,
  setLoading,
  setStat,
  setData,
  todoText,
  setTodoText
}) => {
  return (
    <div className="todos">
      {arrTodos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          toggle={toggle}
          setToggle={setToggle}
          editing={editing}
          setEditing={setEditing}
          completed={completed}
          setCompleted={setCompleted}
          data={arrTodos}
          setLoading={setLoading}
          setStat={setStat}
          setData={setData}
          todoText={todoText}
          setTodoText={setTodoText}
        />
      ))}
    </div>
  );
};

export default Todos;
