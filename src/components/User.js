import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

export const User = () => {
   const { user, imageUser } = useContext(AuthContext);
   const { theme } = useContext(ThemeContext);

   return (
      <Wrapper theme={theme}>
         <Avatar theme={theme} src={imageUser} />
         <h3><span>{user.name}</span></h3>
      </Wrapper>
   );
};

const Wrapper = styled.div`

   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding: 0.625rem;

   background: #${({theme})=>theme.secundaryColor};

   h3 span {
      font-size: 1em;
      color: #${({theme})=>theme.color};
      /* padding: 5px 10px; */
      border-radius: 12px;
      
      /* background: #${({theme})=>theme.background}; */
   }


`;

const Avatar = styled.img`
   width: 60px;
   height: 60px;
   object-fit: cover;

   margin-right: 10px;

   border-radius: 50%;
   border: 2px solid #${({theme}) => theme.background};

`;
