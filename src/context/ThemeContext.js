import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState({ light });

   data = { theme };

   return <ThemeContext.Provider data={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
