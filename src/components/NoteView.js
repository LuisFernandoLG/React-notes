import styled from "styled-components";
import { Note } from "./Note";

export const NoteView = ({ title, content, color, id, handleChange, deleteNote, handleBlur }) => {
   return (
      <NoteViewStyled color={color} onBlur={(e)=>handleBlur(id, e)}>
         <button onClick={()=>deleteNote(id)}> x </button>
         <Note
            id={id}
            title={title}
            content={content}
            color={color}
            handleChange={handleChange}
            handleBlur= {handleBlur}
         />
      </NoteViewStyled>
   );
};

const NoteViewStyled = styled.div`
    background: #${({color})=>color};
    border-radius: 12px;
    position: relative;
    cursor: pointer;

    button{
        /* inset: 0 0 0 0 0; */
        display: none;
        position: absolute;
        right: 5%;
        top: 5%;
        color: #fff;
        outline: none;
        border: none;
        background: transparent;
        font-size: 20px;
        cursor: pointer;
        
    }

    transition: box-shadow .3s ease;

    button:hover{
        background: transparent;
    }


    &:hover{
        box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.19);
        button{
            display: block;
        }
    }


`;
