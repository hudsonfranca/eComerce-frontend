import React from "react";
import PropTypes from "prop-types";
import "../style/css/SideDrawer.css";
import HamburguerButton from "../HamburguerButton/HamburguerButton";

function SideDrawer({ open, close, content }) {
  return (
    <div className={`sideDrawer ${open && "open"}`}>
      <HamburguerButton click={close} type="close" />
      <div className="sideDrawer-content">{}</div>
    </div>
  );
}

SideDrawer.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  content: PropTypes.array
};

export default SideDrawer;
