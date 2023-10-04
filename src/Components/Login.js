import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  const history = useHistory();
  const handleLoginButton = () => {
    alert("You are Logged in!");
    localStorage.setItem("loggedIn", true);
    history.push("/");
  };
  return (
    <>
      <NavBar></NavBar>
      {localStorage.getItem("loggedIn") ? (
        <>
          You are already Logged in.{" "}
          <button
            style={{ background: "red", color: "white" }}
            onClick={() => {
              localStorage.removeItem("loggedIn");
              history.push("/");
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <button onClick={handleLoginButton}>Login</button>
        </>
      )}
    </>
  );
};

export default Login;
