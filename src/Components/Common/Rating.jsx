import React from "react";
import PropTypes from "prop-types";
import { Star } from "~/src/Components/Svg";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<Star key={i} type="complete" />);
  }
  if (rating % 1) {
    stars.push(<Star key="half" type="half" />);
  }
  for (let i = stars.length; i < 5; i++) {
    stars.push(<Star key={i} type="hollow" />);
  }

  return <div>{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
