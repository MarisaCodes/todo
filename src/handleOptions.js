export const handleShowOptions = (toggle, setToggle, id) => {
  if (!Object.keys(toggle)[0]) {
    setToggle({ [id]: true });
  } else {
    if (
      Object.keys(toggle)[0] === String(id) ||
      !toggle[Object.keys(toggle)[0]]
    ) {
      toggle[String(id)]
        ? setToggle({ [id]: false })
        : setToggle({ [id]: true });
    } else if (
      Object.keys(toggle)[0] &&
      Object.keys(toggle)[0] !== String(id)
    ) {
      document
        .getElementById(`todo${Object.keys(toggle)[0]}`)
        ?.classList.add("display");
      setTimeout(() => {
        setToggle({ [id]: true });
      }, 100);
    }
  }
};

export const handleHideOptions = (toggle, setToggle) => {
  if (Object.keys(toggle)[0]) {
    setToggle({ [Object.keys(toggle)[0]]: false });
  }
};
