import React from "react";
import PropTypes from "prop-types";

const Category = ({ cuisine, price }) => (
  <span>
    {cuisine} • {price}
  </span>
);

Category.defaultProps = {
  cuisine: "N/A",
  price: "N/A",
};

Category.propTypes = {
  price: PropTypes.string,
  cuisine: PropTypes.string,
};

export default Category;
