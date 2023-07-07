import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeToggleContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useToggle() {
  return useContext(ThemeToggleContext);
}

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeToggleContext.Provider value={toggleTheme}>
          {children}
        </ThemeToggleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
