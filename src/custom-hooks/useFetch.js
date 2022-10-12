import { useState, useEffect } from "react";
import fetchTodos from "../localstorage/fetchLocalStorage";

const useFetch = (db) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stat, setStat] = useState("loading...");

  useEffect(() => {
    fetchTodos(db)
      .then((data) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => {
        setStat(err.message);
      });
  }, [db]);
  return { data, loading, setLoading, stat, setStat, setData };
};

export default useFetch;
