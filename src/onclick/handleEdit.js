export function handleEdit(
  e,
  id,
  completed,
  editing,
  setEditing,
  text,
  setTodoText
) {
  if (!editing) {
    if (completed[`completed${id}`]) {
      e.stopPropagation();
    } else {
      setEditing(`editing${id}`);
      setTodoText(text);
    }
  }
}
