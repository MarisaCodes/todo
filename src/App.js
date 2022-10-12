import Todos from "./components/Todos";
import useFetch from "./custom-hooks/useFetch";
import { handleHideOptions } from "./onclick/handleOptions";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState({});
  const [completed, setCompleted] = useState({});
  const [editing, setEditing] = useState("");
  const { data, loading, setLoading, stat, setStat, setData } = useFetch("db");
  const [todoText, setTodoText] = useState("");
  console.log(data);
  return (
    <div className="App" onClick={() => handleHideOptions(toggle, setToggle)}>
      <div className="title">
        TODO <span className="react">React</span>
      </div>

      {!loading && !editing && (
        <TodoForm
          data={data}
          setLoading={setLoading}
          setStat={setStat}
          setData={setData}
          todoText={todoText}
          setTodoText={setTodoText}
        />
      )}

      {loading && <div className="status">{stat}</div>}
      {data && (
        <Todos
          arrTodos={data}
          toggle={toggle}
          setToggle={setToggle}
          editing={editing}
          setEditing={setEditing}
          completed={completed}
          setCompleted={setCompleted}
          setLoading={setLoading}
          setStat={setStat}
          setData={setData}
          todoText={todoText}
          setTodoText={setTodoText}
        />
      )}
    </div>
  );
}

export default App;
