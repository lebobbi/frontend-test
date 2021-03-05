import React from "react";
import PropTypes from "prop-types";

const Circle = ({ className, active }) => (
  <svg
    className={className}
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
      fill={active ? "#00E8A4" : "#FF3548"}
    />
  </svg>
);

Circle.defaultProps = {
  active: false,
  className: "",
};

Circle.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default Circle;
