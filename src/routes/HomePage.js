import { NoteForm } from "../components/NoteForm";
import { NotesWrapper } from "../components/NotesWrapper";
import { useNotes } from "../hooks/useNotes";

export const HomePage = () => {
   let {notes, addNote, handleChange, deleteNote, status} = useNotes();


   if(status === "loading") return <div>Cargando . . .</div>

   return (
      <div>
         <NoteForm addNote={addNote} />
         <NotesWrapper deleteNote={deleteNote} notes={notes} handleChange={handleChange} />

         {/* <h2>{ status === "loading" ? "Cargando" : data.title }</h2> */}
      </div>
   );
};
