import React, { useContext } from "react";
import { ThemeContext } from "./context";
import { useTheme, useToggle } from "../contexts/ThemeContext";
const FunctionContextConsumer = () => {
  // const dark = useContext(ThemeContext);
  const dark = useTheme();
  const toggleTheme = useToggle();

  let themeStyles: Object = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333",
    padding: "2em",
    margin: "2rem"
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Context Consumer</div>
    </>
  );
};

export default FunctionContextConsumer;
