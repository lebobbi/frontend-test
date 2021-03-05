import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Category } from "~/src/Components/Common";

const Wrapper = Styled.div`
  color: #757575;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  letter-spacing: 0.5px;
  line-height: 16px;
  margin: 16px 0 20px;
  text-transform: uppercase;
`;
const Status = Styled.span``;

const Information = ({ cuisine, price, status }) => (
  <Wrapper>
    <Category cuisine={cuisine} price={price} />
    <Status status={status} />
  </Wrapper>
);

Information.propTypes = {
  price: PropTypes.string,
  cuisine: PropTypes.string,
  status: PropTypes.bool,
};

export default Information;
