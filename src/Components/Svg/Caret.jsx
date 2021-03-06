import React from "react";
import PropTypes from "prop-types";

const Caret = ({ className }) => (
  <svg
    className={className}
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 0.75L7.7955 1.5455L4.02275 5.31824L0.25 1.5455L1.0455 0.75L4.02275 3.72725L7 0.75Z"
      fill="#969696"
    />
  </svg>
);

Caret.defaultProps = {
  className: "",
};

Caret.propTypes = {
  className: PropTypes.string,
};

export default Caret;
