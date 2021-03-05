import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Title } from "~/src/Components/Common";

const Header = Styled.header`
  margin: 36px 64px 36px;
`;

const Description = Styled.p`
  color: #666666;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.9166666865348816px;
  margin: 0;
  max-width: 752px;
  text-align: left;
`;

const Home = ({ title, description }) => (
  <Header>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Header>
);

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Home.defaultProps = {
  title: "Restaurants",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default Home;
