import { Link } from "react-router-dom/cjs/react-router-dom";
import NavBar from "./NavBar";
import { GoEye } from "react-icons/go";

const Mainpage = () => {
  let todoList = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <NavBar></NavBar>
      <div className="todo_container">
        Your Todo: <br></br>
        {localStorage.getItem("todo") ? (
          <>
            {todoList.map((value, index) => (
              <div className="single_todo">
                {value}
                <Link to={`/view?id=${index}`}>
                  <GoEye size={"20px"}></GoEye>
                </Link>
              </div>
            ))}{" "}
          </>
        ) : (
          <center>
            Nothing on your todo. <Link to="/add">Add To-Do</Link>
          </center>
        )}
      </div>
    </>
  );
};

export default Mainpage;
