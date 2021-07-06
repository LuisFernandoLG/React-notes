import happyFace from "../img/happyFace.svg"
import styled from "styled-components"

export const EmptyStateView = () => {
    return (
        <EmptyStateViewStyled>
            <img src={happyFace} alt="" />
            <p>Add a new note</p>
        </EmptyStateViewStyled>
    )
}

const EmptyStateViewStyled = styled.div`

    padding: 10px;
    margin-top: 10px;
    width: 100%;
    height: 30vh;

    background: #CED4D366;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-size: 1.5em;
        font-weight: 600;
    }

    img{
        /* width: 100%; */
        height: 50%;
    }
`