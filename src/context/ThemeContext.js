import { createContext, useState } from "react";

const ThemeContext = createContext();


const getLocalTheme = ()=>{
   let themeSaved = "";
   if (localStorage.getItem("theme")) {
      themeSaved = localStorage.getItem("theme")
   } else {
      localStorage.setItem("theme", "light");
      themeSaved = localStorage.getItem("theme")
      
   }
   return themeSaved
}

const initialTheneName = getLocalTheme();

const initialThemes = {
   dark: {
      background: "272727",
      secundaryColor: "303030",
      color: "EEEEEE",
      error : "CF6679"
   },

   light: {
      background: "9AA0A6",
      secundaryColor: "383c4a",
      color: "dedede",
   },
};

const ThemeProvider = ({ children }) => {
   const [themeName, setThemeName] = useState(initialTheneName);
   const [theme, setTheme] = useState(initialThemes[themeName]);

   const handleTheme = () => {
      // NOTA SUPER IMPORTANTE, el estado cambia hasta que la función completa termine de ejecutarse, ya que react recopila todas las actualizaciones de estado y después actuliza el state

      // !Por lo que lo siguiente estaría dando problemas extraños
      // setThemeName("dark");
      // setTheme(initialThemes[theme]);

      if (themeName === "light") {
         setThemeName("dark");
         setTheme(initialThemes["dark"]);
         localStorage.setItem("theme", "dark");
      } else {
         setThemeName("light");
         setTheme(initialThemes["light"]);
         localStorage.setItem("theme", "light");
      }
   };
   

   const data = { theme, handleTheme, themeName };

   return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
