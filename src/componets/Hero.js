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
                I'm a frontend developer with a strong interest in web
                development and education. As a former firefighter and teacher,
                I believe in collaboration and problem solutions. I'm also quite
                excited about the tech industry, where you frequently
                collaborate with others to find answers. My ultimate objective
                is to become fullstack, and I won't give up until I achieve it.
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
