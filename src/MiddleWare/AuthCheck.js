import { useHistory } from "react-router-dom/cjs/react-router-dom";

const AuthCheck = () => {
  const history = useHistory();

  !localStorage.getItem("loggedIn") && history.push("/login");
};

export default AuthCheck;
