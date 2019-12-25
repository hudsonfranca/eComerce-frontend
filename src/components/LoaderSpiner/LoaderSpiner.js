import React from "react";

import PropTypes from "prop-types";
import "../../styles/css/LoaderSpiner.css";

export default function SideDrawer({ activate }) {
  return (
    <div className={`${activate && "spiner"}`} data-testid="LoaderSpiner" />
  );
}
