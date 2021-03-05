import React from "react";
import Styled from "styled-components";
import Header from "./Header";

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

const resultsTitle = "All Restaurants";

const Home = () => (
  <>
    <Header />
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
