import { handleCompleted } from "../onclick/handleOptions";
const TodoOptions = ({ id, toggle, setToggle }) => {
  //console.log(id);
  return (
    <div
      className={toggle[`toggled${id}`] || "display"}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={
          toggle[`completed${id}`] ? toggle[`completed${id}`][1] : "option"
        }
      >
        Edit
      </div>
      <div className="option">Delete</div>
      <div
        className="option"
        onClick={() => handleCompleted(id, toggle, setToggle)}
      >
        Completed
      </div>
    </div>
  );
};

export default TodoOptions;
