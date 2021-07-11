import { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";
import NoteModal from "./NoteModal";

const NoteViewx = ({ id, title, content, color, date, deleteNote, updateNote }) => {
   const [isNoteOpen, setIsNoteOpen] = useState(false);
   const {theme} = useContext(ThemeContext)

   const openNote = () => setIsNoteOpen(true);
   const closeNote = () => setIsNoteOpen(false);

   return (
      <>
         <NoteViewxStyled theme={theme} color={color} onClick={openNote}>
            <NoteTitle>{title}</NoteTitle>
            <NoteContent>{content}</NoteContent>
            <NoteDate theme={theme}>{date}</NoteDate>
         </NoteViewxStyled>

         {isNoteOpen && (
            <NoteModal
               id={id}
               title={title}
               content={content}
               color={color}
               date={date}
               closeNote={closeNote}
               deleteNote = {deleteNote}
               updateNote={updateNote}
            />
         )}
      </>
   );
};

const NoteDate = styled.div`
   padding: 0.4125em;
   border-radius: 0.3125em;

   color: #272727;
   font-weight: 800;

  color: #${({theme})=>theme.color};
  background: #${({theme})=>theme.background};

  width: max-content;
  
  text-align: right;
  margin: 0.625rem 0;
  margin-left: auto;

   /* position: absolute;
   right: 0.625em;
   bottom: 0.625em; */
`;

const NoteViewxStyled = styled.div`
   position: relative;
   background: #${({ color }) => color};
   cursor: pointer;


   border-radius: 8px;
   /* border: 8px solid #${({theme})=>theme.color}; */
   padding: 1em;
   height: min-content;

   position: relative;
   cursor: pointer;
   transition: box-shadow 0.3s ease;

   

   &:hover {
      box-shadow: 2px 2px 15px 5px gray;
      button {
         display: block;
      }
   }
`;

const NoteTitle = styled.h3`
   overflow: hidden;
   max-width: 100%;
   text-align: left;

   font-weight: 700;
   margin-bottom: 5px;
`;
const NoteContent = styled.pre`
   font-weight: 300;
   line-height: 1.5em;
   font-family: "nunito";
   overflow: hidden;
`;

export default NoteViewx;
