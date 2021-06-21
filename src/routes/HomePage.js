import { NoteForm } from "../components/NoteForm";
import { NotesWrapper } from "../components/NotesWrapper";
import { useNotes } from "../hooks/useNotes";

export const HomePage = () => {
   let {notes, addNote, handleChange, deleteNote} = useNotes();

   return (
      <div>
         <NoteForm addNote={addNote} />
         <NotesWrapper deleteNote={deleteNote} notes={notes} handleChange={handleChange} />
      </div>
   );
};
