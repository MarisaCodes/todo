import Todos from "./Todos";

const Create = () => {
  return (
    <div>
      <form className="form">
        <input autoFocus="on" type="text" className="input" />
        <input type="submit" value="Create" className="btn" />
      </form>
      <Todos />
    </div>
  );
};

export default Create;
