import React, { Component } from "react";
import { ThemeContext } from "./context";

export default class ClassContextConsumer extends Component {
  themeStyles(dark: string): Object {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2em",
      margin: "2rem"
    };
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {(darkTheme: string) => {
            return (
              <div style={this.themeStyles(darkTheme)}>
                Class Context Consumer
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </>
    );
  }
}
