import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Category, Status, Title, Rating } from "~/src/Components/Common";

const Wrapper = Styled.header`
  margin: 36px 64px 48px;
`;

const Information = Styled.div`
  color: #666666;
  display: flex;
  font-size: 22px;
  justify-content: space-between;
  line-height: 32px;
  margin-top: 24px;
`;

const rating = 4;
const name = "Restaurant";
const cuisine = "Mexican";
const price = "$$";
const active = true;

const Header = ({ restaurantId }) => (
  <Wrapper>
    <Title>{`${name} ${restaurantId}`}</Title>
    <Rating size={30} rating={rating} />
    <Information>
      <Category cuisine={cuisine} price={price} />
      <Status active={active} size="big" />
    </Information>
  </Wrapper>
);

Header.propTypes = {
  restaurantId: PropTypes.number.isRequired,
};

export default Header;
