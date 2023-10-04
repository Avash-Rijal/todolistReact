const AuthCheckBoolean = () => {
  let checkLoggedIn = false;

  if (localStorage.getItem("loggedIn")) {
    checkLoggedIn = true;
  }

  return checkLoggedIn;
};

export default AuthCheckBoolean;
