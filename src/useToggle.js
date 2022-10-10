import { useState, useEffect } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState({});
  useEffect(() => {
    const id = Object.keys(toggle)[0];

    toggle[id]
      ? document.getElementById(`todo${id}`)?.classList.remove("display")
      : document.getElementById(`todo${id}`)?.classList.add("display");
  }, [toggle]);
  return { toggle, setToggle };
};

export default useToggle;
