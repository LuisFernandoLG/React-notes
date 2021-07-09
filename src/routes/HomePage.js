import { EmptyStateView } from "../components/EmptyStateView";
import { HeaderOptions } from "../components/HeaderOptions";
import { NoteForm } from "../components/NoteForm";
import NotesWrapper from "../components/NotesWrapper";

import { useNotes } from "../hooks/useNotes";

export const HomePage = () => {
   let { notes, addNote, deleteNote, isLoading, updateNote, fetchNotes } = useNotes();

   return (
      <div>
         {/* {isLoading && <Loader />} */}
         <HeaderOptions fetchNotes={fetchNotes} isLoading={isLoading} />

         <NoteForm addNote={addNote} />

         {notes === null ? null : notes.length > 0 ? (
            <NotesWrapper deleteNote={deleteNote} notes={notes} updateNote={updateNote} />
         ) : (
            <EmptyStateView />
         )}
      </div>
   );
};
