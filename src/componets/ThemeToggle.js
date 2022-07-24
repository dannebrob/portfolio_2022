import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ThemeToggle.css";

class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const trueOrFalse = this.props.props;

    const { toogle } = this.context;
    return (
      <div className="toggle-container">
        <button className="toogle-btn" onClick={toogle}>
          {trueOrFalse ? "☀️" : "🌔"}
        </button>
        <p className="toggle-text">Dark Mode: {trueOrFalse ? "OFF" : "ON"}</p>
      </div>
    );
  }
}

export default ThemeToggle;
