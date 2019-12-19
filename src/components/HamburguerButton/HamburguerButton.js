import React from "react";
import "../style/css/HamburguerButton.css";
import PropTypes from "prop-types";

function HamburguerButton({ click, type }) {
  return (
    <button
      type="button"
      className={`hamburguerButton ${type}`}
      onClick={click}
    >
      <div className="rbline" />
      <div className="rbline" />
      <div className="rbline" />
    </button>
  );
}

HamburguerButton.propTypes = {
  click: PropTypes.func.isRequired
};

export default HamburguerButton;
