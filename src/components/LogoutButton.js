import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import styled from "styled-components"

export const LogoutButton = () => {

    const { logout } = useContext(AuthContext)
    return (
        <LogOutButtonStyled onClick={logout}>   
        Log out
        </LogOutButtonStyled>
    )
}


const LogOutButtonStyled = styled.a`
padding: 0;
margin: 0;
cursor: pointer;
background: #ff2400;

`