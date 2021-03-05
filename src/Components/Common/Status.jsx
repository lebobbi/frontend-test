import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Circle } from "~/src/Components/Svg";

const StatusCircle = Styled(Circle)`
  margin-right: 4px;
`;

const Status = ({ status }) => (
  <span>
    <StatusCircle active={status} />
    {status ? "Open Now" : "Closed"}
  </span>
);

Status.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default Status;
