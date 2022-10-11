export const handleShowOptions = (toggle, setToggle, id) => {
  const toggleKeys = Object.keys(toggle);
  if (!toggleKeys.length || !toggleKeys.join("").includes("toggled")) {
    setToggle({ [`toggled${id}`]: "todo-options", ...toggle });
  } else {
    if (toggleKeys.join("").includes(`toggled${id}`)) {
      if (toggle[`toggled${id}`] === "todo-options") {
        delete toggle[`toggled${id}`];
        const newToggle = toggle;
        setToggle({ [`toggled${id}`]: "display", ...newToggle });
      } else {
        delete toggle[`toggled${id}`];
        const newToggle = toggle;
        setToggle({ [`toggled${id}`]: "todo-options", ...newToggle });
      }
    } else {
      delete toggle[toggleKeys[0]];
      const newToggle = toggle;
      setToggle({ ...newToggle });

      setTimeout(() => {
        setToggle({ [`toggled${id}`]: "todo-options", ...newToggle });
      }, 200);
    }
  }
};

export const handleHideOptions = (toggle, setToggle) => {
  const toggleKeys = Object.keys(toggle);
  if (toggleKeys.length) {
    if (toggleKeys.join("").includes("toggled")) {
      delete toggle[toggleKeys[0]];
      setToggle({ ...toggle });
    }
  }
};

export const handleCompleted = (id, toggle, setToggle) => {
  if (toggle[`completed${id}`] === undefined) {
    setToggle({
      ...toggle,
      [`completed${id}`]: ["completed", "edit-delete-comp"],
    });
  } else if (
    toggle[`completed${id}`].join("") ===
    ["completed", "edit-delete-comp"].join("")
  ) {
    setToggle({ ...toggle, [`completed${id}`]: ["todo", "option"] });
  } else if (
    toggle[`completed${id}`].join("") === ["todo", "option"].join("")
  ) {
    setToggle({
      ...toggle,
      [`completed${id}`]: ["completed", "edit-delete-comp"],
    });
  }
};
