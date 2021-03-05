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
    {
      id: 1,
      name: "Restaurant 1",
      cuisine: "Hamburguer",
      rating: 3.5,
      status: false,
    },
    {
      id: 2,
      price: "$$",
      name: "Very Long Name For A Restaurant 2 Test Overflow Alignment",
    },
    {
      id: 3,
      name: "Restaurant 3",
      rating: 3.5,
      status: true,
      cuisine: "thai",
      price: "$",
    },
    {
      id: 4,
      name: "Restaurant 4",
      rating: 4.5,
      status: true,
      cuisine: "Mexican",
      price: "$$",
    },
    {
      id: 5,
      name: "Restaurant 5",
      rating: 4,
      status: false,
      cuisine: "Japanese",
      price: "$$$$",
    },
    {
      id: 6,
      name: "Restaurant 6",
      rating: 1,
      status: false,
      cuisine: "Chinese",
      price: "$$",
    },
    {
      id: 7,
      name: "Restaurant 7",
      rating: 1.5,
      status: true,
      cuisine: "Mexican",
      price: "$$$",
    },
    {
      id: 8,
      name: "Restaurant 8",
      rating: 0,
      status: true,
      cuisine: "Pizza",
      price: "$",
    },
    {
      id: 9,
      name: "Restaurant 9",
      rating: 5,
      status: true,
      cuisine: "Italian",
      price: "$$$",
    },
  ],
};

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
};

export default RestaurantList;
