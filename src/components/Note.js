import styled from "styled-components";
import { ColorPalette } from "./ColorPalette";

export const Note = ({ title, content, color, id, handleChange, titleTextArea, contentTextArea }) => {
   return (
      <NoteStyled color={color}>
         <input className="title"
         ref={titleTextArea}
            placeholder="title"
            type="text"
            name="title"
            onChange={(e) => handleChange(id, e)}
            value={title}
         />
         <textarea
         ref={contentTextArea}
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
   display: flex;
   flex-direction: column;
   justify-content: center;

   padding: 20px 5px;
   background: #${({ color }) => color};
   margin: 10px;
   transition: backgroud 1s ease;
   border-radius: 16px;
   color: gray;
   overflow: hidden;

   .title{
      
      font-weight: 600;
      text-align: center;
      padding: 0;
      margin: 0;
      border-bottom: 2px solid #27272729;
   }
 
   input[type="text"],
   textarea {
      color: inherit ;
      background: transparent;
      outline: none;
      border: none;
      overflow: hidden;
      resize: none;
      font-size: 20px;
      padding:10px;
   }

   
   button {
      background: transparent;
   }
   
   p {
      font-weight: 300;
   }
   `;
