import { ThemeContext } from "../contexts/ThemeContext";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div
            className="footer"
            id="footer"
            style={{ background: theme.bg, color: theme.fontColor }}
          >
            <h2>Lets connect!</h2>
            <div className="social-links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/danielbroback/"
              >
                <img
                  alt="LinkedIn"
                  src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/daniel_broback"
              >
                <img
                  alt="Twitter"
                  src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
                />
              </a>
              <a href="mailto: hej@danielbroback.se">
                <img
                  alt="Email me"
                  src="https://img.icons8.com/color/48/000000/circled-envelope.png"
                />
              </a>
            </div>
            <div className="credits">
              <p>Built with ☕ and ❤️</p>
              <p>by Daniel Brobäck © {year} </p>
              <p>Powered by React</p>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Footer;
