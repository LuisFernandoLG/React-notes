import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";
import { ButtonStyled } from "./SyncNotesButton";

export const SearchButton = ({openSearchBar}) => {
   const { theme } = useContext(ThemeContext);
   return (
      <ButtonStyled onClick={openSearchBar} theme={theme}>
         <FaSearch />
      </ButtonStyled>
   );
};
