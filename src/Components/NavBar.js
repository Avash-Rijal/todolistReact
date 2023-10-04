import { Link } from "react-router-dom/cjs/react-router-dom";

const NavBar = () => {
  return (
    <div className="nav_bar">
      To Do List
      <div className="menu_items">
        <Link to="/home">
          <div>Home</div>
        </Link>
        <Link to="/login">
          <div>Login</div>
        </Link>
        <Link to="/add">
          <div>Add To-Do</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
