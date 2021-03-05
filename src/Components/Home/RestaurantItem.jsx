import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Link } from "@reach/router";

const Item = Styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
  margin-right: 32px;
  padding: 0;
  width: 304px;
`;

const Image = Styled.img`
  background: #d8d8d8;
  height: 228px;
  width: 304px;
`;

const Details = Styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = Styled.h3`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  margin: 16px 0 8px;
`;

const Rating = Styled.div``;
const Cuisine = Styled.span``;
const Price = Styled.span``;
const Status = Styled.span``;
const LearnMoreLink = Styled(Link)`
  align-items: center;
  align-self: flex-end;
  background: #002b56;
  border: 1px solid #002b56;
  border-radius: 2px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.857143px;
  line-height: 16px;
  text-transform: uppercase;
  width: 100%;
`;

const learnMore = "Learn More";

const RestaurantItem = ({ id, name, image, imageAlt }) => (
  <Item>
    <Details>
      <Image src={image} alt={imageAlt} />
      <Name>{name}</Name>
      <Rating />
      <Cuisine />
      <Price />
      <Status />
    </Details>
    <LearnMoreLink to={`/details/${id}`}>{learnMore}</LearnMoreLink>
  </Item>
);

RestaurantItem.defaultProps = {
  id: "1",
  name: "Very Long Name Restaurants Number 1 In List",
  image: "",
  imageAlt: "Restaurant Image",
};

RestaurantItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default RestaurantItem;
