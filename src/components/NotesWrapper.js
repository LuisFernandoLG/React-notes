import styled from "styled-components"
import { NoteView } from "./NoteView"

export const NotesWrapper = ({notes, handleChange, deleteNote}) => {

    return (
        <Wrapper>
            { notes.map( (note, index)=> ( <NoteView deleteNote={deleteNote} key={index} id={index} title={note.title} content={note.content} color={note.color} handleChange={handleChange} />) )  }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
`