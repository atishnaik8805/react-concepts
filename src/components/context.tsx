import React, { useState } from "react";

import ClassContext from "./classContext";
import FunctionContextConsumer from "./functionalContext";

import ThemeProvider, { useTheme } from "../contexts/ThemeContext";

const Context = () => {
  // const [darkTheme, setDarkTheme] = useState(true);

  // function toggleTheme() {
  //   setDarkTheme((prevTheme) => !prevTheme);
  // }

  // return (
  //   <>
  //     <ThemeContext.Provider value={darkTheme}>
  //       <h3>
  //         Hello from Context Provider, Theme is {darkTheme ? "dark" : "light"}
  //       </h3>
  //       <button onClick={toggleTheme}>Toggle Theme</button>
  //       <ClassContext />
  //       <FunctionContextConsumer />
  //     </ThemeContext.Provider>
  //   </>
  // );
  const theme = useTheme() ? "dark" : "light";

  return (
    <>
      <ThemeProvider>
        <h3>The theme used here is {theme}</h3>
        <FunctionContextConsumer />
      </ThemeProvider>
    </>
  );
};

export default Context;
