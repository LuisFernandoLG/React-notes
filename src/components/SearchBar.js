import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { SearchButton } from "./SearchButton";
import styled from "styled-components";
import { useRef } from "react";

const SearchBar = () => {
   const [searchValue, setSearchValue] = useState("");
   const { theme } = useContext(ThemeContext);

   let searchInputRef = useRef(null);

   const openSearchBar = ()=> searchInputRef.current.style.display = "block"
   const closeSearchBar= ()=> searchInputRef.current.style.display = "none"

   return (
      <SearchBarStyled theme={theme}>
         <input
            ref={searchInputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
         />
         <SearchButton openSearchBar={openSearchBar}/>
      </SearchBarStyled>
   );
};

const SearchBarStyled = styled.div`
   background: #${({ theme }) => theme.background};
   padding: 10px;
   width: min-content;

   input{
       display: none;
   }

   display: flex;
`;

export default SearchBar;
