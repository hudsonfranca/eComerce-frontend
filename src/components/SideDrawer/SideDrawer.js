import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sideDrawerClose } from "../../actions/SideDrawer";
import "../style/css/SideDrawer.css";

export function SideDrawer({ isOpen, sideDrawerClose, content }) {
  return (
    <div className={`sideDrawer ${isOpen}`} data-testid="SideDrawer">
      <button
        type="button"
        className="hamburguerButton close"
        onClick={sideDrawerClose}
      >
        <div className="rbline" />
        <div className="rbline" />
        <div className="rbline" />
      </button>
      <div className="sideDrawer-content">{content}</div>
    </div>
  );
}

const mapStateToProps = state => ({
  isOpen: state.sideDrawerState.isOpen,
  content: state.sideDrawerState.content
});

const mapDispatchToProps = dispatch => ({
  sideDrawerClose: () => dispatch(sideDrawerClose())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
