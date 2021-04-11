import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--secondary"];

export const Button = ({ children, type, onClick, buttonStyle, icon }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link to="/" className="btn">
      <button
      className={`btn ${checkButtonStyle}`}
      onClick = {onClick}
      type={type}
      >
          
          {children}
          </button>
    </Link>
  );
};
