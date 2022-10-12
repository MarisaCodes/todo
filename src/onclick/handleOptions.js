export const handleShowOptions = (toggle, setToggle, id) => {
  const toggleKey = Object.keys(toggle);
  if (!toggleKey.length) {
    setToggle({ [id]: true });
  } else {
    if (Number(toggleKey) === Number(id)) {
      if (toggle[id] === true) {
        setToggle({ [id]: false });
      } else {
        setToggle({ [id]: true });
      }
    } else {
      setToggle({});
      setTimeout(() => {
        setToggle({ [id]: true });
      }, 50);
    }
  }
};

export const handleHideOptions = (toggle, setToggle) => {
  const toggleKey = Object.keys(toggle);
  if (toggleKey.length) {
    setToggle({});
  }
};
