import { EmptyStateView } from "../components/EmptyStateView";
import { Loader } from "../components/Loader";
import { NoteForm } from "../components/NoteForm";
import NotesWrapper from "../components/NotesWrapper";
import { useNotes } from "../hooks/useNotes";

export const HomePage = () => {
   let { notes, addNote, deleteNote, isLoading, updateNote } = useNotes();

   return (
      <div>
         {isLoading && <Loader />}
         <NoteForm addNote={addNote} />

         
         {notes === null ? null : notes.length > 0 ? (
            <NotesWrapper deleteNote={deleteNote} notes={notes} updateNote={updateNote} />
         ) : (
            <EmptyStateView/>
         )}
      </div>
   );
};
