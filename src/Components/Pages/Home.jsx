import React from "react";
import Styled from "styled-components";

const Header = Styled.header`
  margin: 36px 64px 36px;
`;

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

const SearchSection = Styled.section``;

const FilterNav = Styled.header`
  border: 1px solid #e6e6e6;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  height: 80px;
  width: 100%;
`;

const SearchResults = Styled.main`
  margin: 36px 64px 242px ;
`;

const ResultsTitle = Styled.h2`
  color: #333333;
  font-size: 34px;
  margin: 42px 0 64px;
  letter-spacing: 1px;
  line-height: 40px;
`;

const RestaurantList = Styled.ul`
  display: flex;
`;
const RestaurantItem = Styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  padding: 0;
  width: 304px;
`;

/** Mocks */
const title = "Restaurants";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const resultsTitle = "All Restaurants";

const Home = () => (
  <>
    <Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Header>
    <SearchSection>
      <FilterNav />
      <SearchResults>
        <ResultsTitle>{resultsTitle}</ResultsTitle>
        <RestaurantList>
          <RestaurantItem />
        </RestaurantList>
      </SearchResults>
    </SearchSection>
  </>
);

export default Home;
