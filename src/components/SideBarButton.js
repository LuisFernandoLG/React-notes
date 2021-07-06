import { React, useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Btn, SideBar } from "./SideBar";

export const SideBarButton = () => {

    const [display, setDisplay] = useState("none")
    const {theme} = useContext(ThemeContext)

    const openSideBar = ()=> setDisplay("block")

    const closeSideBar= ()=> setDisplay("none")

    return (
        <div>
            <Btn theme={theme} onClick={openSideBar}>Menú</Btn>

            <SideBar display={display} closeSideBar={closeSideBar}/>
        </div>
    )
}




