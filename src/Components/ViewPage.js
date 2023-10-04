import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom";
import NavBar from "./NavBar";
import AuthCheckBoolean from "../MiddleWare/AuthCheckBoolean";

const ViewPage = () => {
  const history = useHistory();

  let getLocation = useLocation();

  const getURLParams = new URLSearchParams(getLocation.search);

  const getId = getURLParams.get("id");

  let getTodoItem = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  let getData = getTodoItem[getId];

  const deleteTodo = () => {
    getTodoItem.splice(getId, 1);
    localStorage.setItem("todo", JSON.stringify(getTodoItem));
    history.replace("/");
  };

  return (
    <>
      <NavBar />
      <button
        style={{ color: "#666", background: "#e7e7e7" }}
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back
      </button>
      <div
        style={{
          background: "#e7e7e7",
          padding: "20px",
          fontSize: "20px",
          margin: "20px",
        }}
      >
        {getData}
      </div>
      {AuthCheckBoolean() ? (
        <>
          {" "}
          <button
            style={{ background: "red", color: "white" }}
            onClick={deleteTodo}
          >
            Delete
          </button>
        </>
      ) : (
        <>
          {" "}
          <center>
            Login to Delete the To-Do. <Link to="/login">Login</Link>
          </center>
        </>
      )}
    </>
  );
};

export default ViewPage;
