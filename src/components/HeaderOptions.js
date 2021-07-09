import SearchBar from "../components/SearchBar";
import { SyncNotesButton } from "../components/SyncNotesButton";
import { Toolbar } from "../components/Toolbar";
import styled from "styled-components"

export const HeaderOptions = ({fetchNotes, isLoading}) => {
    return (
        <HeaderOptionsStyled>
            <Toolbar>
            <SyncNotesButton fetchNotes={fetchNotes} isLoading={isLoading} />
           
         </Toolbar>

         <SearchBar/>
        </HeaderOptionsStyled>
    )
}

const HeaderOptionsStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`