import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {db} from "../firebase"


export const useNotes = () => {
   const [notes, setNotes] = useState([]);


   const getNotes =  ()=>{
      const querySnapshot = await db.collection("notes").onSnapshot(()=>{

      });
      
   }

   useEffect(() => {


      

      if (!localStorage.getItem("notesList")) {
         localStorage.setItem("notesList", []);
      } else {
         setNotes(JSON.parse(localStorage.getItem("notesList")));
      }
   }, []);


   useEffect(() => {
      localStorage.setItem("notesList", JSON.stringify(notes));
   }, [notes]);

   const addNote = async (note) => {
      await db.collection("notes").doc().set(note)

      setNotes([...notes, note]);
      localStorage.setItem("notesList", notes);
   };

   const handleChange = (id, e) => {
      let name = e.target.name.includes("color") ? "color" : e.target.name;
      let { value } = e.target;

      let newNotes = notes.map((el, index) => {
         if (index === id) {
            return { ...el, [name]: value };
         } else return el;
      });

      setNotes(newNotes);
   };

   const deleteNote = (id) => {
      let newNotes = notes.filter((note, index) => {
         if (index !== id) return note;
      });
      toast.error("Deleted :(", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
      setNotes(newNotes);
   };

   return {
      notes,
      setNotes,
      addNote,
      deleteNote,
      handleChange,
   };
};
