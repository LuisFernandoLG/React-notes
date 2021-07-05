import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const initialUser = JSON.parse(localStorage.getItem("user")) || {};

const initialAuth = localStorage.getItem("auth") || false;

const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState(initialAuth);
   const [user, setUser] = useState(initialUser);

   const login = (user) => {
      setAuth(true);
      setUser(user);
   };


   const logout = () => {
      setAuth(false);
      setUser(initialUser);
   };

   useEffect(() => {
      localStorage.setItem("auth", auth);
      localStorage.setItem("user", JSON.stringify(user));
   }, [auth]);

   const data = { auth, user, login, logout };

   return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
