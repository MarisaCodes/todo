import { useHref,Link } from "react-router-dom";
const Todos = () => {
  const href = useHref();
  const todos = JSON.parse(localStorage.getItem("db")).todos;
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          {/* <Link to={`:id${}`} className="todo-text">{todo.text}</Link> */}
          {href === "/" && <div className="options">options</div>}
        </div>
      ))}
    </div>
  );
};

export default Todos;
