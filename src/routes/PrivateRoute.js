import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const PrivateRoute = ({ component: Component, ...res }) => {

   const { auth } = useContext(AuthContext);

   return (
      <Route path="/" exact>
         {auth ? <Component/> : <Redirect to="/login" />}
      </Route>
   );
};
