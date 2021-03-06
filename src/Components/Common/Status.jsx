import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Circle } from "~/src/Components/Svg";

const StatusCircle = Styled(Circle)`
  margin-right: ${props => props.size === "small" ? "4px" : "8px"};
`;

const Wrapper = Styled.span`
  display: inline-flex;
  align-items: center;
`;

const sizes = {
  big: 22,
  small: 8,
};

const Status = ({ status, size }) => (
  <Wrapper>
    <StatusCircle active={status} size={sizes[size]} />
    {status ? "Open Now" : "Closed"}
  </Wrapper>
);

Status.defaultProps = {
  size: "small",
};

Status.propTypes = {
  status: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["big", "small"]),
};

export default Status;
