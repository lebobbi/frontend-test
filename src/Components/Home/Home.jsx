import React from "react";
import Styled from "styled-components";

import { Button } from "~/src/Components/Common";
import Header from "./Header";
import RestaurantList from "./RestaurantList";

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
  margin: 36px 32px 242px 64px;
`;

const ResultsTitle = Styled.h2`
  color: #333333;
  font-size: 34px;
  margin: 42px 0 64px;
  letter-spacing: 1px;
  line-height: 40px;
`;

const LoadMoreButton = Styled(Button)`
  display: block;
  margin: 0 auto 242px;
  width: 416px;
`;

const resultsTitle = "All Restaurants";
const loadMore = "Load More";

const Home = () => (
  <>
    <Header />
    <SearchSection>
      <FilterNav />
      <SearchResults>
        <ResultsTitle>{resultsTitle}</ResultsTitle>
        <RestaurantList />
      </SearchResults>
      <LoadMoreButton>{loadMore}</LoadMoreButton>
    </SearchSection>
  </>
);

export default Home;
