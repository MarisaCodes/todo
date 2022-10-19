import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="title">
        TODO <span className="react">React</span>
      </Link>
      <Link className="btn" to="create">
        Add todo
      </Link>
    </div>
  );
};

export default NavBar;
