import { useContext } from "react"
import styled from "styled-components"
import ThemeContext from "../context/ThemeContext"
import { User } from "./User"

export const SideBar = ({display, closeSideBar}) => {

    const handleOnClickOut = (e)=>{
        // e.stopPropagation();
    //   if (!(e.target.className.includes("side-bar"))) closeSideBar();
    }

    const {theme} = useContext(ThemeContext)

    return (
        <SidBarStyled theme={theme} display={display} className="side-bar" onClick={handleOnClickOut}>
            <Btn theme={theme} onClick={closeSideBar}>Cerrar</Btn>
            <User/>
        </SidBarStyled>
    )
}

const SidBarStyled = styled.div`

    display: ${({display})=>display};

    position: fixed;
    top: 0;
    left: 0;

    z-index: 200;

    height: 100%;  
    width: 30%;
    box-shadow: 5px 5px 20px #${({theme})=>theme.secundaryColor};
    background: #${({theme})=>theme.background};
`


const Btn = styled.button`
    padding: 10px;
    text-align: center;
    margin: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #${({theme})=>theme.secundaryColor};
    color: #${({theme})=>theme.color};

    

`

export { Btn }