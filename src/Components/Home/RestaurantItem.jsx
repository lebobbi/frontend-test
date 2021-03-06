import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Link } from "@reach/router";

import Information from "./Information";
import { Rating, Image } from "~/src/Components/Common";
import { buttonStyles } from "~/src/Components/Common/Button";

const Item = Styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
  margin-right: 32px;
  padding: 0;
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

const LearnMoreLink = Styled(Link)`
  ${buttonStyles}
  align-items: center;
  align-self: flex-end;
  background: #002b56;
  color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const learnMore = "Learn More";

const RestaurantItem = ({
  id,
  name,
  image,
  imageAlt,
  rating,
  status,
  cuisine,
  price,
}) => (
  <Item>
    <Details>
      <Image src={image} alt={imageAlt} />
      <Name>{name}</Name>
      <Rating rating={rating} />
      <Information cuisine={cuisine} price={price} status={status} />
    </Details>
    <LearnMoreLink to={`/details/${id}`}>{learnMore}</LearnMoreLink>
  </Item>
);

RestaurantItem.defaultProps = {
  name: "",
  image: "",
  imageAlt: "Restaurant Image",
};

RestaurantItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  rating: PropTypes.number,
  cuisine: PropTypes.string,
  status: PropTypes.bool,
  price: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default RestaurantItem;
