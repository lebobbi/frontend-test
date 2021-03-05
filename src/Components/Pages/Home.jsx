import React from "react";
import Styled from "styled-components";

const Page = Styled.div`
  margin: 36px 64px;
`;

const Header = Styled.header``;

const Title = Styled.h1`
  color: #333333;
  font-size: 54px;
  font-weight: normal;
  line-height: 64px;
  letter-spacing: 0.964286px;
  margin: 0 0 24px;
  text-align: left;
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

/** Mocks */
const title = "Restaurants";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const Home = () => (
  <Page>
    <Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Header>
  </Page>
);

export default Home;
