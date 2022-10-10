import Todo from "./Todo";
import useFetch from "./useFetch";
import { handleHideOptions } from "./handleOptions";
import useToggle from "./useToggle";
import { useState } from "react";

function App() {
  const { data, loading, setLoading, stat } = useFetch();
  const { toggle, setToggle } = useToggle();
  const [todoText, setTodoText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    data.push({ id: data.length + 1, text: todoText });
    localStorage.setItem("db", JSON.stringify(data));
    setLoading(false);
    setTodoText("");
  };
  return (
    <div className="App" onClick={() => handleHideOptions(toggle, setToggle)}>
      <div className="title">
        TODO <span className="react">React</span>
      </div>

      {!loading && (
        <form id="form-todo" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Write your todo..."
            id="text-todo"
            value={todoText}
            required
            onChange={(e) => setTodoText(e.target.value)}
          />
          <input type="submit" value="Add" id="submit-todo" />
        </form>
      )}

      {loading && <div>{stat}</div>}
      {data && <Todo arrTodos={data} toggle={toggle} setToggle={setToggle} />}
    </div>
  );
}

export default App;
