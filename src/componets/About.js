import { ThemeContext } from "../contexts/ThemeContext";
import "./About.css";
import profilePicture from "../assets/profilePicture.png";
function About() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div
            className="about"
            id="about"
            style={{ background: theme.bg, color: theme.fontColor }}
          >
            <div className="presentation">
              <img
                className="profile-picture"
                alt="profile picture"
                src={profilePicture}
              />
              <p>
                Hello! I'm Daniel Brobäck, a Front-end developer based in
                Gothenburg (Sweden). I'm a problem-solver and self-taught
                javascript developer. Let's build something great together!
              </p>
            </div>
            <div className="stack">
              <h2>My Stack</h2>
              <div className="icons">
                <img
                  alt="html"
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                />
                <img
                  alt="css"
                  src="https://img.icons8.com/color/48/000000/css3.png"
                />
                <img
                  alt="javascript"
                  src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                />
                <img
                  alt="typeScript"
                  src="https://img.icons8.com/color/48/null/typescript.png"
                />
                <img
                  alt="react"
                  src="https://img.icons8.com/color/48/000000/react-native.png"
                />
                <img
                  alt="git"
                  src="https://img.icons8.com/color/48/000000/git.png"
                />
                <img
                  alt="wordpress"
                  src="https://img.icons8.com/color/48/000000/wordpress.png"
                />
              </div>
            </div>
            <div className="engage">
              <p>
                I like working with JavaScript / TypeScript and React, and I'm
                always looking forward to learn new technologies.
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://1drv.ms/b/s!Atz8nSRU0aXekLA0ArCQEPop9CKWHQ?e=kTD7T9"
              >
                <button>My resume</button>
              </a>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default About;
