import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitch = () => {
   const { theme, handleTheme, themeName } = useContext(ThemeContext);

   return (
      <ThemeSwitchStyled theme={theme}>
         <input
            type="checkbox"
            name="themeSwitch"
            defaultChecked={themeName === "dark"}
            id="themeSwitch"
         />
         <label htmlFor="themeSwitch" onClick={handleTheme}>
            Toggle
         </label>
      </ThemeSwitchStyled>
   );
};

const ThemeSwitchStyled = styled.div`
   font-size: 5px;
   margin: 10px 0;

   input[type="checkbox"] {
      height: 0;
      width: 0;
      visibility: hidden;
   }

   label {
      cursor: pointer;
      text-indent: -624.9375em;
      width: 12.5em;
      height: 6.25em;
      background: #${({ theme }) => theme.background};
      display: block;
      border-radius: 6.25em;
      position: relative;
   }

   label:after {
      content: "";
      position: absolute;
      top: 0.3125em;
      left: 0.3125em;
      width: 5.625em;
      height: 5.625em;
      background: #${({ theme }) => theme.color};;
      border-radius: 5.625em;
      transition: 0.3s;
   }

   input:checked + label {
      background: #${({ theme }) => theme.background};
   }

   input:checked + label:after {
      left: calc(100% - 0.3125em);
      transform: translateX(-100%);
   }

   label:active:after {
      width: 8.125em;
   }

   // centering
   body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
   }
`;

export default ThemeSwitch;
