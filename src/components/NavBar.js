import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import styled from "styled-components";
import { LogoutButton } from "./LogoutButton";
import AuthContext from "../context/AuthContext";

export const NavBar = () => {
   const { theme } = useContext(ThemeContext);
   const { auth } = useContext(AuthContext);


   return (
      <NavBarStyled theme={theme}>

         <NavLink exact to="/" activeClassName="active-link">
            Home
         </NavLink>
         <NavLink to="/settings" activeClassName="active-link">
            Settings
         </NavLink>

         { auth && <LogoutButton/> }

         
      </NavBarStyled>
   );
};

const NavBarStyled = styled.nav`
   background: #${({ theme }) => theme.background};
   padding: 2rem;

   display: flex;
   justify-content: flex-end;
   align-items: center;
   a {
      padding: 1rem;
      background: #${({ theme }) => theme.secundaryColor};
      color: #${({ theme }) => theme.color};
   }

   .active-link {
      font-weight: 600;
      background: #61dafb;
   }
`;
