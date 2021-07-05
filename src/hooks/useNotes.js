import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getDate } from "../helpers/dateHelpers";
import { decodeBase64, encodeBase64 } from "../helpers/encodeHelper";

export const useNotes = () => {
   const [notes, setNotes] = useState([]);
   const [isLoading, setIsLoading] = useState(null);

   const fetchNotes = async () => {
      setIsLoading(true);
      fetch("http://127.0.0.1:8000/getall")
         .then((j) => j.json())
         .then((json) => {
            const data = json.results;
            let x = data.map((note) => decodeValues(note));
        
            setNotes(x);
            setIsLoading(false);
         });
   };

   useEffect(() => {
      fetchNotes();
   }, []);

   const encodeValues = (objeto) => {
      let newObject = {};
      for (const [key, value] of Object.entries(objeto)) {
      
         newObject = { ...newObject, [key]: (key === "date" || key === "id") ? value : encodeBase64(value) };
      }

      return newObject;
   };

   const decodeValues = (objeto) => {
      let newObject = {};
      for (const [key, value] of Object.entries(objeto)) {
         newObject = { ...newObject, [key]: (key === "date" || key === "id") ? value : decodeBase64(value) };
      }
      return newObject;
   };

   const addNote = async (note) => {
      let d = getDate();
      note = { ...note, date: d };
      setIsLoading(true);
      await fetch("http://127.0.0.1:8000/note", {
         method: "POST",
         body: JSON.stringify(encodeValues(note)),
         headers: {
            "content-type": "application/json",
         },
      })
         .then((j) => j.json())
         .then((json) => {
         });

      await fetchNotes();
   };

   const handleChange = (id, e) => {
      let name = e.target.name.includes("color") ? "color" : e.target.name;
      let { value } = e.target;

      let newNotes = notes.map((el) => {
         if (el.id === id) {
            return { ...el, [name]: value };
         } else return el;
      });

      setNotes(newNotes);
   };

   const handleBlur = async (id, e) => {
      let myNote = null;
      for (let note of notes) {
         if (note.id === id) {
            myNote = note;
         }
      }
      setIsLoading(true);
      await fetch(`http://127.0.0.1:8000/note/${id}`, {
         method: "PUT",
         body: JSON.stringify(myNote),
         headers: {
            "content-type": "application/json",
         },
      })
         .then((j) => j.json())
         .then((json) => {
            if (json === "Ok!") {
               setIsLoading(false);
               fetchNotes();
            }
         });
   };

   const deleteNote = async (id) => {
      await fetch(`http://127.0.0.1:8000/note/${id}`, {
         method: "DELETE",
      })
         .then((j) => j.json())
         .then((json) => {
         });
      await fetchNotes();

      toast.error("Deleted :(", {
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
      await fetch(`http://127.0.0.1:8000/note/${id}`, {
         method: "PUT",
         body: JSON.stringify(encodeValues(note)),
         headers: {
            "content-type": "application/json",
         },
      });

      await fetchNotes();
   };

   return {
      notes,
      setNotes,
      addNote,
      deleteNote,
      handleChange,
      isLoading,
      handleBlur,
      updateNote,
   };
};
