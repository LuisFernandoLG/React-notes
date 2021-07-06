import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { autoGrow } from "../helpers/autoGrow";
import { Note } from "./Note";

const initialForm = {
   title: "",
   content: "",
   color: "ACE7FF",
};

export const NoteForm = ({ addNote }) => {
   const [form, setForm] = useState(initialForm);
   const titleTextArea = useRef(null)
   const contentTextArea = useRef(null)

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
      setForm(initialFormNew);
   };

   const id = "form";

   useEffect(()=>{
      autoGrow(titleTextArea.current)
      autoGrow(contentTextArea.current)
   }, [form])

   return (
      <StyledForm onSubmit={handleSubmit} bgColor={form.color}>
         <Note
            title={form.title}
            content={form.content}
            color={form.color}
            handleChange={handleChange}
            id={id}
            titleTextArea={titleTextArea}
            contentTextArea={contentTextArea}
         />
      </StyledForm>
   );
};

const StyledForm = styled.form`
margin-top: 20px;
   display: flex;
   flex-direction: column;
   padding: 10px;
   width: 40%;
   background: #${({ bgColor }) => bgColor};
`;
