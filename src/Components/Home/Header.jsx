import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Title } from "~/src/Components/Common";

const Wrapper = Styled.header`
  margin: 36px 64px 36px;
`;

const Description = Styled.p`
  color: #666666;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.9166666865348816px;
  margin: 8px 0 0;
  max-width: 752px;
  text-align: left;
`;

const Header = ({ title, description }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: "Restaurants",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default Header;
