import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ContactMe.css";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_so1ld5v",
        "template_yq1i0kw",
        form.current,
        "UB_dw46aED4grivHu"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for your email");
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent, please try again" + JSON.stringify(error));
        }
      );
  };

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div
            id="contact-me"
            className="contact-me"
            style={{ background: theme.bg, color: theme.fontColor }}
          >
            <p>Let´s start a conversation 👋</p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="name">
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="  Enter your name"
                />
              </div>
              <div className="email">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="  Enter a valid email adress"
                />
              </div>
              <div className="msg">
                <label>Message</label>
                <textarea name="message" placeholder=" Enter your message" />
              </div>
              <input
                className="submit"
                type="submit"
                value="Submit your email"
              />
            </form>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
