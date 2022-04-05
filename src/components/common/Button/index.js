import "./Button.css";
import React from "react";

const Button = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <div
      className={`flex flex-absolute button-wrapper ${customClass}`}
      onClick={onClick}
    >
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
