import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

export const Toolbar = ({ children }) => {
   const { theme } = useContext(ThemeContext);

   return <ToolBarStyled theme={theme}>{children}</ToolBarStyled>;
};

const ToolBarStyled = styled.div`
margin-top: 5px;
   background: #${({ theme }) => theme.background};
   width: min-content;
   height: auto;
   padding: 10px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;

   border-radius: 12px;
`;
