import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ThemeToggle.css";

class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const trueOrFalse = this.props.props;

    const { toogle } = this.context;
    return (
      <button className="toogle-btn" onClick={toogle}>
        {trueOrFalse ? "☀️" : "🌔"}
      </button>
    );
  }
}

export default ThemeToggle;
