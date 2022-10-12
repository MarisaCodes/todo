export const handleCompleted = (id, completed, setCompleted, editing) => {
  if (editing.slice(7) !== String(id)) {
    if (completed[`completed${id}`] === undefined) {
      setCompleted({
        ...completed,
        [`completed${id}`]: true,
      });
    } else if (completed[`completed${id}`] === true) {
      setCompleted({ ...completed, [`completed${id}`]: false });
    } else if (completed[`completed${id}`] === false) {
      setCompleted({
        ...completed,
        [`completed${id}`]: true,
      });
    }
  }
};
