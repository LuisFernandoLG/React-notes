import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { FaSyncAlt } from "react-icons/fa";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

export const SyncNotesButton = ({ fetchNotes, isLoading }) => {
   const syncButtonRef = useRef(null);
   const { theme } = useContext(ThemeContext);

   const syncNotes = () => fetchNotes();

   useEffect(() => {
      if (isLoading === null) return;

      if (isLoading) syncButtonRef.current.style.animation = "rotate 1s normal infinite";
      else syncButtonRef.current.style.animation = "end-rotate 0.2s ease-out";
   });

   return (
      <div>
         <ButtonStyled
            aria-label={"Sync"}
            aria-required="true"
            theme={theme}
            onClick={syncNotes}
         >
            <div ref={syncButtonRef}>
               <FaSyncAlt />
            </div>
         </ButtonStyled>
      </div>
   );
};

const ButtonStyled = styled.button`
   color: #${({ theme }) => theme.color};
   border-radius: 20%;
   

   padding: 8px;
   border: none;
   cursor: pointer;
   background: transparent;

   &:hover {
      background: #${({ theme }) => theme.secundaryColor};
   }
`;

export { ButtonStyled }
