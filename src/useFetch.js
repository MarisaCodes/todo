import { useState, useEffect } from "react";
import fetchTodos from "./fetchLocalStorage";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stat, setStat] = useState("loading...");

  useEffect(() => {
    fetchTodos()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setStat(err.message);
      });
  }, []);
  return { data, loading, setLoading, stat, setStat, setData };
};

export default useFetch;
