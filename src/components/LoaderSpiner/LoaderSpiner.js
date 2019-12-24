import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../style/css/LoaderSpiner.css";

export default function SideDrawer({ activate }) {
  return (
    <div className={`${activate && "spiner"}`} data-testid="LoaderSpiner" />
  );
}
