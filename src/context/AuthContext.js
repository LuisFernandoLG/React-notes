import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const initialUser = JSON.parse(localStorage.getItem("user")) || {};

const initialAuth = localStorage.getItem("auth") || false;

const initialImageUser = localStorage.getItem("user-image") || "https://image.shutterstock.com/image-vector/standard-user-icon-avatar-600w-467859065.jpg"

const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState(initialAuth);
   const [user, setUser] = useState(initialUser);
   const [imageUser, setImgUser] = useState(initialImageUser)

   const login = (user, img) => {
      setAuth(true);
      setUser(user);
      setImgUser(img)
   };


   const logout = () => {
      setAuth(false);
      setUser({});
      setImgUser(null)
   };

   useEffect(() => {
      localStorage.setItem("auth", auth);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("user-image", imageUser);
      
      //Al usar variables de estado aquí dentro, react piensa que al no ponerlas en la dependencias, "es un error"
   }, [auth, user, imageUser]);

   

   const data = { auth, user, login, logout, imageUser };
   return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
