import styled from "styled-components";
import { ColorPalette } from "./ColorPalette";

export const Note = ({ title, content, color, id, handleChange }) => {
   return (
      <NoteStyled color={color}>
         <input
            placeholder="title"
            type="text"
            name="title"
            onChange={(e) => handleChange(id, e)}
            value={title}
         />
         <textarea
            placeholder="..."
            name="content"
            onChange={(e) => handleChange(id, e)}
            value={content}
         />
         <ColorPalette id={id} colorPicked={color} handleChange={handleChange} />
      </NoteStyled>
   );
};

const NoteStyled = styled.div`
   padding: 20px;
   background: #${({ color }) => color};
   margin: 10px;
   transition: backgroud 1s ease;
   border-radius: 16px;
   color: #fff;

   input[type="text"],
   textarea {
      color: #fff;
      background: transparent;
      outline: none;
      border: none;
      overflow: hidden;
      resize: none;
      font-size: 20px;
   }

   input[type="text"] {
      font-weight: 600;
      text-align: center;
   }

   button {
      background: transparent;
   }

   p {
      font-weight: 300;
   }
`;
