import Todos from "./components/Todos";
import useFetch from "./custom-hooks/useFetch";
import { handleHideOptions } from "./onclick/handleOptions";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState({});
  const { data, loading, setLoading, stat, setStat, setData } = useFetch();
  return (
    <div className="App" onClick={() => handleHideOptions(toggle, setToggle)}>
      <div className="title">
        TODO <span className="react">React</span>
      </div>

      {!loading && (
        <TodoForm
          data={data}
          setLoading={setLoading}
          setStat={setStat}
          setData={setData}
        />
      )}

      {loading && <div className="status">{stat}</div>}
      {data && <Todos arrTodos={data} toggle={toggle} setToggle={setToggle} />}
    </div>
  );
}

export default App;
