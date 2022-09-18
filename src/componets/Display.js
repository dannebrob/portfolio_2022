import { ThemeContext } from "../contexts/ThemeContext";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Cards } from "../assets/data/DisplayData";
import DisplayItem from "./DisplayItem";
import "./Display.css";
function Display() {
  const generateDisplayItem = Cards.map((item) => {
    return (
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        offset="100"
        initiallyVisible="true"
        animateOnce="true"
      >
        <DisplayItem
          key={item.id}
          id={item.id}
          title={item.title}
          preamble={item.preamble}
          text={item.text}
          image={item.image}
          github={item.github}
          webpage={item.webpage}
          tags={item.tags}
        />
      </AnimationOnScroll>
    );
  });

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div style={{ background: theme.bg, color: theme.fontColor }}>
            <div className="display" id="work">
              {generateDisplayItem}
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Display;
