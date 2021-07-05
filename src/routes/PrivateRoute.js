import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// Los dos puntos se utulizan para dar alias
export const PrivateRoute = ({ component: Component, ...res }) => {
   // console.log(...props)

   const { auth } = useContext(AuthContext);

   return (
      <Route path="/" exact>
         {auth ? <Component/> : <Redirect to="/login" />}
      </Route>
   );
};
