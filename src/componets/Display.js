import { ThemeContext } from "../contexts/ThemeContext";
import Data from "../assets/data/DisplayData";
import DisplayItem from "./DisplayItem";
import "./Display.css";
function Display() {
  const generateDisplayItem = Data.map((item) => {
    return (
      <DisplayItem
        key={item.id}
        title={item.title}
        text={item.text}
        image={item.image}
        github={item.github}
        webpage={item.webpage}
        tags={item.tags}
      />
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
