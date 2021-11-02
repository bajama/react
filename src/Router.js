import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Navigation from "./components/organisms/Navigation";
import { Layout } from "./components/atoms";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Signup from "./components/pages/Signup";
import UserContext from "./context/user";
import { useContext } from "react";
import UserName from "./components/pages/UserName";

const Router = () => {
  const { isLogin } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Layout>
        {isLogin && <Navigation />}
        <Switch>
          <Route path="/" exact>
            {isLogin ? <Main /> : <Login />}
          </Route>
          <Route path="/Signup" exact>
            {isLogin ? <Signup /> : <Login />}
          </Route>
          <Route path="/Logout" exact>
            <Logout />
          </Route>
          <Route path="/:userName" exact>
            <UserName />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
