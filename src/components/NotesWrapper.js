import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";
import NoteViewx from "./NoteViewx";

const NotesWrapper = ({ notes, deleteNote,updateNote }) => {
   const { theme } = useContext(ThemeContext);

   return (
      <Wrapper theme={theme}>
         {notes.map((note) => (
            <NoteViewx
               key={note.id}
               id={note.id}
               title={note.title}
               content={note.content}
               color={note.color}
               date = {note.date}
               deleteNote = {deleteNote}
               updateNote = {updateNote}
            />
         ))}
      </Wrapper>
   );

};

export default (NotesWrapper)

const Wrapper = styled.div`
   background: #${({ theme }) => theme.background};
   /* background: red; */
   margin-top: 20px;
   display: grid;
   padding: 10px;
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

   gap: 10px;
`;
