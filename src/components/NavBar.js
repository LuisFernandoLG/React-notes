import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            <NavLink to="/settings" activeClassName="active-link">Settings</NavLink>
        </nav>
    )
}
