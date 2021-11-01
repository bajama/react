import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Navigation from "./components/organisms/Navigation";
import { Layout } from "./components/atoms";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import setDefaultHeader from "./helpers/user.js";
const Router = () => {
  setDefaultHeader();
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
