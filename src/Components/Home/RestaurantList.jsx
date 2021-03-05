import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import RestaurantItem from "./RestaurantItem";

const List = Styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const RestaurantList = ({ restaurants }) => (
  <List>
    {restaurants.map((item) => (
      <RestaurantItem key={item.id} {...item} />
    ))}
  </List>
);

RestaurantList.defaultProps = {
  restaurants: [
    { id: 1, name: "Restaurant 1" },
    {
      id: 2,
      name: "Very Long Name For A Restaurant 2 Test Overflow Alignment",
    },
    { id: 3, name: "Restaurant 3" },
    { id: 4, name: "Restaurant 4" },
    { id: 5, name: "Restaurant 5" },
    { id: 6, name: "Restaurant 6" },
    { id: 7, name: "Restaurant 7" },
    { id: 8, name: "Restaurant 8" },
    { id: 9, name: "Restaurant 9" },
  ],
};

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
};

export default RestaurantList;
