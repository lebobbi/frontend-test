import React from "react";
import PropTypes from "prop-types";

const Star = ({ type }) => {
  const pathProps =
    type === "complete" ? { fill: "#002B56" } : { stroke: "#002B56" };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-describedby="title"
    >
      <title>A {type} Star</title>
      <description>Rating star</description>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99999 0.140015L12.76 7.54001H19.76L13.86 11.98L16.72 19.44L9.99999 14.4L3.29999 19.44L6.13999 11.98L0.23999 7.54001H7.21999L9.99999 0.140015Z"
        {...pathProps}
      />
      {type === "half" && (
        <>
          <mask
            id="mask0"
            width="20"
            height="20"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              stroke="#fff"
              d="M9.998 1.566l2.293 6.149.122.325H18.264l-4.705 3.54-.3.227.134.352 2.24 5.84L10.3 14l-.3-.225-.3.225-5.317 4 2.224-5.842.134-.351-.3-.226L1.736 8.04h5.83l.122-.324 2.31-6.15z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path fill="#002B56" d="M0 0H10V20H0z" />
          </g>
        </>
      )}
    </svg>
  );
};

Star.defaultProps = {
  type: "complete",
};

Star.propTypes = {
  type: PropTypes.oneOf(["half", "complete", "hollow"]),
};

export default Star;
