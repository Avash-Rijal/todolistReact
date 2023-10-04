import Mainpage from "../Components/Mainpage";
import AddTodo from "../Components/AddTodo";
import Login from "../Components/Login";

import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";

import { Redirect } from "react-router-dom/cjs/react-router-dom";
import ViewPage from "../Components/ViewPage";
import Notfound from "../Components/Notfound";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>

          <Route path="/home" component={Mainpage} exact></Route>

          <Route path="/add" component={AddTodo} exact></Route>

          <Route path="/login" component={Login} exact></Route>

          <Route path="/view" component={ViewPage}></Route>

          <Route path="*" component={Notfound} exact></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
