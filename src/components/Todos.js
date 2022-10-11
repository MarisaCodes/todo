import Todo from "./Todo";
const Todos = ({ arrTodos, toggle, setToggle }) => {
  return (
    <div className="todos">
      {arrTodos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          toggle={toggle}
          setToggle={setToggle}
        />
      ))}
    </div>
  );
};

export default Todos;
