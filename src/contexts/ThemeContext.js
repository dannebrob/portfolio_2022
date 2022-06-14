import { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { fontColor: "#555", ui: "#ddd", bg: "#eee", bg2: "#F9F9F9" },
    dark: { fontColor: "#ddd", ui: "#333", bg: "#555", bg2: "#cccccc" },
    bg2: "#cccccc",
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toogle: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
