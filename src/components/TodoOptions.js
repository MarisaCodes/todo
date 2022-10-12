import { handleCompleted } from "../onclick/handleCompleted";
import { handleEdit } from "../onclick/handleEdit";

const TodoOptions = ({
  id,
  setEditing,
  editing,
  completed,
  setCompleted,
  text,
  setTodoText,
}) => {
  return (
    <div className="todo-options" onClick={(e) => e.stopPropagation()}>
      <div
        className={
          completed[`completed${id}`] || editing?.slice(7)
            ? "edit-delete-comp"
            : "option"
        }
        onClick={(e) =>
          handleEdit(e, id, completed, editing, setEditing, text, setTodoText)
        }
      >
        Edit
      </div>
      <div
        className={
          editing?.slice(7) === String(id) ? "edit-delete-comp" : "option"
        }
      >
        Delete
      </div>
      <div
        className={
          editing?.slice(7) === String(id) ? "edit-delete-comp" : "option"
        }
        onClick={() => handleCompleted(id, completed, setCompleted, editing)}
      >
        Completed
      </div>
    </div>
  );
};

export default TodoOptions;
