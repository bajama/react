import Router from "./Router";
import "./App.css";
import setDefaultHeader from "./helpers/user.js";
import UserContext from "./context/user";
import { useState } from "react";

function App() {
  setDefaultHeader();
  //!!두번은 있는지 없는지 에따라 참,거짓 판명
  const [isLogin, setIsLogin] = useState(!!localStorage.token);
  const value = {
    isLogin,
    setIsLogin: (val) => setIsLogin(val),
  };
  return (
    <UserContext.Provider value={value}>
      <Router />;
    </UserContext.Provider>
  );
}

export default App;
