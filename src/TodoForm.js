import { useState } from "react";

function uploadData(newData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("db", JSON.stringify({ todos: newData }));
      resolve(1);
    }, 1000);
  });
}

const TodoForm = ({ data, setLoading, setStat, setData }) => {
  const [todoText, setTodoText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTodoText("");
    setStat("Adding todo...");
    const newData = [...data, { id: data.length + 1, text: todoText }];
    uploadData(newData, todoText, setLoading).then(() => {
      setLoading(false);
      setData(newData);
    });
  };
  return (
    <form id="form-todo" onSubmit={(e) => handleSubmit(e)}>
      <input
        autoComplete="off"
        type="text"
        placeholder="Write your todo..."
        id="text-todo"
        value={todoText}
        required
        onChange={(e) => setTodoText(e.target.value)}
      />
      <input type="submit" value="Add" id="submit-todo" />
    </form>
  );
};

export default TodoForm;
