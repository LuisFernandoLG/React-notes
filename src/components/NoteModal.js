import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";
import { autoGrow } from "../helpers/autoGrow";
import { getDate } from "../helpers/dateHelpers";

const NoteModal = ({
   id,
   title,
   content,
   color,
   date,
   closeNote,
   deleteNote,
   updateNote,
}) => {
   const [form, setForm] = useState({ id, title, content, color, date });
   const { theme } = useContext(ThemeContext);
   
   const titleTextArea = useRef(null)
   const contentTextArea = useRef(null)

   const handleChange = (e) => {
      let name = e.target.name.includes("color") ? "color" : e.target.name;
      let newForm = {
         ...form,
         [name]: e.target.value,
         date : getDate()
      };
      setForm(newForm);
   };

   

   const closeNoteOnClickOut = (e) => {
      e.stopPropagation();
      if (e.target.className.includes("note-modal")) {
         closeNote();
         updateNote(id, form);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   useEffect(()=>{
      autoGrow(titleTextArea.current)
      autoGrow(contentTextArea.current)
   }, [form])

   return (
      <NoteModalStyled color={color} theme={theme} onClick={closeNoteOnClickOut}>
         <div className="glass note-modal"></div>
         <form onSubmit={handleSubmit}>
            <br />

            <textarea ref={titleTextArea} value={form.title} className="title" name="title" onChange={handleChange}/>

            <textarea ref={titleTextArea} value={form.content} name="content" onChange={handleChange} />
            <br />
            <div className="date"> {date} </div>

            <div className="options">
               <button className="delete" onClick={() => deleteNote(id)}>
                  Delete
               </button>

               <button
                  onClick={() => {
                     updateNote(id, form);
                     closeNote();
                  }}
               >
                  Cerrar
               </button>
            </div>
         </form>
      </NoteModalStyled>
   );
};

const NoteModalStyled = styled.div`
   position: fixed;

   top: 0;
   left: 0;
   width: 100%;
   height: 100%;

   display: flex;
   justify-content: center;
   align-items: center;

   .glass {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #272727;
      filter: blur(300px);
   }

   z-index: 100;

   form {
      z-index: 150;
      width: 80%;
      max-width: 600px;
      padding: 2em;
      
      min-height: 30%;

      border-radius: 1em;

      .title {
         font-weight: 600;
         font-size: 1.2em;
      }

      textarea {
         width: 100%;
         padding: 2px;
         background: transparent;
         border: none;
         outline: none;
         overflow: hidden;
         box-shadow: none;
         resize: none;
      }
      letter-spacing: 0.2px;

      .date {
         text-align: right;
      }

      button {
         font-size: 1.1em;
         padding: 10px;
         margin: 2px;
         font-weight: 600;
         color: #${({ theme }) => theme.color};
         background: #${({ theme }) => theme.background};
         border: none;
         cursor: pointer;
      }

      .options {
         display: flex;
         justify-content: center;
         align-items: center;

         .delete {
            background: #cd221e;
         }
      }

      background: #${({ color }) => color};
   }
`;

export default NoteModal;
