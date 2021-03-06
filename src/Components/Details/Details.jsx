import React from "react";
import Styled from "styled-components";
import Header from "./Header";

const MapSection = Styled.section``;
const ReviewSection = Styled.section``;

const Details = ({ restaurantId }) => (
  <>
    <Header restaurantId={restaurantId} />
    <MapSection restaurantId={restaurantId} />
    <ReviewSection restaurantId={restaurantId} />
  </>
);

export default Details;
