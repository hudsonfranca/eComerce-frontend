import React from "react";
import "../style/css/ToobarButton.css";

export default function ToobarButton({ icon, click, label, ...props }) {
  return (
    <>
      {label}
      <button
        type="button"
        className="toobar__button"
        onClick={click}
        {...props}
      >
        <i className={`${icon} fa-2x`} />
      </button>
    </>
  );
}
