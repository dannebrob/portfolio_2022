import { ThemeContext } from "../contexts/ThemeContext";
import "./Hero.css";
import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div
            className="hero"
            id="hero"
            style={{ background: theme.bg, color: theme.fontColor }}
          >
            <img className="avatar" src={avatar} alt="This is my avatar" />
            <div className="headline">
              <h1>👋 I'm Daniel Brobäck</h1>
              <h2 className="animate__animated animate__flip">
                Front-End Developer
              </h2>
              <p>
                I design and develop responsive, optimized websites and web
                apps. Currently available for short- and long term
                opportunities.
              </p>
              <div className="button-container">
                <a href="#contact-me">
                  <button>Contact</button>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://1drv.ms/b/s!Atz8nSRU0aXekLA0ArCQEPop9CKWHQ?e=kTD7T9"
                >
                  <button>My resume</button>
                </a>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Hero;
