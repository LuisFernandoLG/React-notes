import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import styled from "styled-components";
import { LogoutButton } from "./LogoutButton";
import AuthContext from "../context/AuthContext";
import { SideBarButton } from "./SideBarButton";

export const NavBar = () => {
   const { theme } = useContext(ThemeContext);
   const { auth } = useContext(AuthContext);

   console.log(auth)

   return (
      <NavBarStyled theme={theme}>
         <div>
         {auth && <SideBarButton />}
         
            
         </div>

         <div>
            <NavLink exact to="/" activeClassName="active-link">
               Home
            </NavLink>
            <NavLink to="/settings" activeClassName="active-link">
               Settings
            </NavLink>
            
            <NavLink to="/testing" activeClassName="active-link">
               Testing
            </NavLink>

         </div>

         <div>{auth && <LogoutButton />}</div>
      </NavBarStyled>
   );
};

const NavBarStyled = styled.nav`
   background: #${({ theme }) => theme.background};
   padding: 2rem;

   display: flex;
   justify-content: space-evenly;
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
