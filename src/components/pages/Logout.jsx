import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import UserContext from "../../context/user";
import setDefaultHeader from "../../helpers/user";

const Logout = () => {
  let history = useHistory();
  const { setIsLogin } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("token");
    setDefaultHeader();

    setIsLogin(false);
    history.push("/");
  }, []);
  return <></>;
};
export default Logout;
