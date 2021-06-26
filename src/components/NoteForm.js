import { useState } from "react";
import styled from "styled-components";
import { Note } from "./Note";

const initialForm = {
   title: "",
   content: "",
   color: "ACE7FF",
};

export const NoteForm = ({ addNote }) => {
   const [form, setForm] = useState(initialForm);

   const handleChange = (id, e) => {
      let name = e.target.name.includes("color") ? "color" : e.target.name;
      let newForm = {
         ...form,
         [name]: e.target.value,
      };
      setForm(newForm);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addNote(form);
      const initialFormNew = { ...initialForm, color: form.color };
      console.log(initialFormNew)
      setForm(initialFormNew);
   };

   const id = "form";

   return (
      <StyledForm onSubmit={handleSubmit} bgColor={form.color}>
         <Note
            title={form.title}
            content={form.content}
            color={form.color}
            handleChange={handleChange}
            id={id}
         />
      </StyledForm>
   );
};

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   padding: 10px;
   width: min-content;
   background: #${({ bgColor }) => bgColor};

   input[type="text"] {
      border-bottom: 2px solid #27272739;
   }

   input,
   textarea {
      background: transparent;
      border: none;

      outline: none;
      padding: 10px;
   }

   textarea {
      resize: none;
   }

   input[type="text"]:focus {
      border-bottom: 2px solid #272727;
   }
`;
