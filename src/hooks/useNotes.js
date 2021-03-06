import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getDate } from "../helpers/dateHelpers";
import { encodeObjectBase64, decodeObjectBase64 } from "../helpers/encodeHelper";
import { useFetch } from "./useFetch";

const url = "https://react--notes.herokuapp.com";

export const useNotes = () => {
   const [notes, setNotes] = useState(null);
   const { isLoading, errors, get, put, _delete, post } = useFetch();

   const fetchNotes = async () => {
      let data = await get(`${url}/getall`);
      if (!data) return;
      const dataDecoded = data.results.map((noteEncoded) =>
         decodeObjectBase64(noteEncoded)
      );

      setNotes(dataDecoded);
   };

   useEffect(() => {
      fetchNotes();
   }, []);

   useEffect(() => {
      if (errors) errors && showToast(errors.statusText || "Error en la bd");
   }, [errors]);

   const addNote = async (note) => {
      note = { ...note, date: getDate() };
      let options = { body: encodeObjectBase64(note) };
      await post(`${url}/note`, options);
      await fetchNotes();
   };

   const deleteNote = async (id) => {
      await _delete(`${url}/note/${id}`);
      showToast("Deleted :(");
      await fetchNotes();
   };

   const showToast = (msg) => {
      toast.error(msg, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const updateNote = async (id, note) => {
      await put(`${url}/note/${id}`, {
         body: encodeObjectBase64(note),
      });
      await fetchNotes();
   };

   return {
      notes,
      setNotes,
      addNote,
      deleteNote,
      isLoading,
      updateNote,
      fetchNotes
   };
};
