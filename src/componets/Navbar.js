import "./Navbar.css";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
function Navbar() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{ background: theme.bg, color: theme.fontColor }}>
            <ThemeToggle props={isLightTheme} />
            <ul>
              <li>
                <a href="#work">WORK</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#footer">CONNECT</a>
              </li>
            </ul>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Navbar;
