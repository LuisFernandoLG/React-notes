import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";
import { autoGrow } from "../helpers/autoGrow";
import { ColorPalette } from "./ColorPalette";

const initialForm = {
  title: "",
  content: "",
  color: "ACE7FF",
};

export const NoteForm = ({ addNote }) => {
  const [form, setForm] = useState(initialForm);
  const titleInputRef = useRef(null);
  const contentTextAreaRef = useRef(null);
  const colorPaletteRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    autoGrow(titleInputRef.current);
    autoGrow(contentTextAreaRef.current);
  }, [form]);

  const id = "form";


  return (
    <StyledForm theme={theme} onSubmit={handleSubmit} bgColor={form.color}>
      <input
        placeholder="Title"
        type="text"
        value={form.title}
        name="title"
        onChange={(e) => handleChange(id, e)}
      />
      <textarea
        ref={contentTextAreaRef}
        placeholder="Take a note"
        name="content"
        value={form.content}
        onChange={(e) => handleChange(id, e)}
      />

      <ColorPalette
        id={id}
        colorPicked={form.color}
        handleChange={handleChange}
        useRef={colorPaletteRef}
      />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  border-radius: 0.9125em;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 50%;
  background: #${({ bgColor }) => bgColor};

  input[type="text"],
  textarea {
    background: #${({ bgColor }) => bgColor};
    border: none;
    outline: none;

    padding: 10px;
    color: #${({ theme }) => theme.background};

    &::placeholder {
      color: #8d97a0;
      /* color: red; */
    }
  }

  textarea {
    flex-grow: 1;
    resize: none;
  }
`;
