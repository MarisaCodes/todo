function fetchLocalStorage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localStorage.getItem("db"));
    }, 1500);
  });
}

async function fetchTodos() {
  const db = await fetchLocalStorage();
  if (db) {
    return JSON.parse(db).todos;
  } else {
    throw Error("unable to get resource");
  }
}

export default fetchTodos;
