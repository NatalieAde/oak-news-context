import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
