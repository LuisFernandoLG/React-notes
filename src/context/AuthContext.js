import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const initialUser = JSON.parse(localStorage.getItem("user")) || {};

// Si guardo un valor booleano en el localstorage, a la hora de extraerlo necesito parsearlo a JSON, ya que sino se quedará como string ---> "false" en lugar de false
const initialAuth = JSON.parse(localStorage.getItem("auth")) || false;

const initialImageUser = localStorage.getItem("user-image") || "https://image.shutterstock.com/image-vector/standard-user-icon-avatar-600w-467859065.jpg"

const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState(initialAuth);
   console.log(auth)
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
