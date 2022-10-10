import Todo from "./Todo";
import useFetch from "./useFetch";
import { handleHideOptions } from "./handleOptions";
import useToggle from "./useToggle";
import TodoForm from "./TodoForm";

function App() {
  const { data, loading, setLoading, stat, setStat, setData } = useFetch();
  const { toggle, setToggle } = useToggle();
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

      {loading && <div>{stat}</div>}
      {data && <Todo arrTodos={data} toggle={toggle} setToggle={setToggle} />}
    </div>
  );
}

export default App;
