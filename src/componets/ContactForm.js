import { ThemeContext } from "../contexts/ThemeContext";

function ContactForm() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div style={{ background: theme.bg, color: theme.fontColor }}>
            <p>Contact Form</p>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ContactForm;
