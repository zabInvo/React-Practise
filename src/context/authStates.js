import { useState } from "react";
import authContext from "./authContext";

// DEFINE STATES AND PROVIDER
const AuthState = (props) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "Zain Ali",
    email: "",
  });

  function removeAuthUser() {
    return setUser({
      isLoggedIn: false,
      name: "",
      email: "",
    });
  }

  return (
    <authContext.Provider value={{ state : user, removeAuthUser , setUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
