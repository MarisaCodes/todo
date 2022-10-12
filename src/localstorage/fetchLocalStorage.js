function fetchLocalStorage(db) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localStorage.getItem(db));
    }, 1500);
  });
}

async function fetchTodos(db) {
  const db_ = await fetchLocalStorage(db);
  if (db_) {
    return JSON.parse(db_);
  } else {
    throw Error("unable to get resource");
  }
}

export default fetchTodos;
