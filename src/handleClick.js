const handleClick = (id, className, elId) => {
  const todoEl = document.getElementById(elId + id);
  todoEl.classList.contains(className)
    ? todoEl.classList.remove(className)
    : todoEl.classList.add(className);
};
export default handleClick;
