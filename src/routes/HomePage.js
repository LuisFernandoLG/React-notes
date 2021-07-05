import { Loader } from "../components/Loader";
import { NoteForm } from "../components/NoteForm";
import NotesWrapper from "../components/NotesWrapper";
import { User } from "../components/User";
import { useNotes } from "../hooks/useNotes";

export const HomePage = () => {
   let { notes, addNote, handleChange, deleteNote, isLoading, handleBlur, updateNote } = useNotes();

   

   return (
      <div>
         <User/>
          { isLoading && <Loader/>} 
         <NoteForm addNote={addNote}/>

         <NotesWrapper
            deleteNote={deleteNote}
            notes={notes}
            handleChange={handleChange}
            handleBlur={handleBlur}
            updateNote={updateNote}
         />
      </div>
   );
};