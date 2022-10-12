function uploadData(newData, db) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(db, JSON.stringify({ todos: newData }));
      resolve(newData);
    }, 1500);
  });
}

export const handleSubmit = (
  e,
  db,
  setLoading,
  setTodoText,
  setStat,
  data,
  setData,
  todoText,
  setEditing,
  id = null
) => {
  e.preventDefault();
  if (!id) {
    addTodos(
      db,
      setLoading,
      setTodoText,
      setStat,
      data,
      setData,
      todoText,
      "Adding todo...",
      data.length + 1
    );
  } else {
    addTodos(
      db,
      setLoading,
      setTodoText,
      setStat,
      data,
      setData,
      todoText,
      "Editing todo...",
      id
    );
    setEditing("");
  }
};

function addTodos(
  db,
  setLoading,
  setTodoText,
  setStat,
  data,
  setData,
  todoText,
  stat,
  todoId
) {
  setLoading(true);
  setTodoText("");
  setStat(stat);
  let newData;
  if (todoId === data.length + 1) {
    newData = [...data, { id: todoId, text: todoText }];
  } else {
    data[todoId - 1] = { id: todoId, text: todoText };
    newData = data;
  }
  uploadData(newData, db).then((res) => {
    console.log("uploaded");
    setLoading(false);
    setData(res);
  });
}
