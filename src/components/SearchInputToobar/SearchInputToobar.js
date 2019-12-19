import React from "react";
import PropTypes from "prop-types";
import "../style/css/SearchInputToobar.css";

function SearchInputToobar({ label, onChange, onClickButton, ...props }) {
  return (
    <>
      {label}
      <input
        type="text"
        className="searchInput"
        onChange={onChange}
        {...props}
      />
      <button
        type="button"
        className="searchInputButom"
        onClick={onClickButton}
      >
        <i className="fas fa-search fa-2x" />
      </button>
    </>
  );
}

SearchInputToobar.propTypes = {};

export default SearchInputToobar;
