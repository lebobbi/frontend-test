import React from "react";
import Styled from "styled-components";
import { buttonStyles } from "~/src/Components/Common/Button";
import BooleanFilter from "./BooleanFilter";

const Wrapper = Styled.header`
  align-items: center;
  border: 1px solid #e6e6e6;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  display: flex;
  height: 80px;
  padding: 24px 64px;
  width: 100%;
`;

const FilterTitle = Styled.span`
  color: #606060;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 24px;
`;

const ClearButton = Styled.button`
  ${buttonStyles}
  border-radius: 0;
  display: inline-block;
  font-size: 12px;
  height: 38px;
  margin-left: auto;
  width: 150px;
`;

const filterBy = "Filter By:";
const openNow = "Open Now";
const clearAll = "Clear All";

const FilterNav = () => (
  <Wrapper>
    <FilterTitle>{filterBy}</FilterTitle>
    <BooleanFilter name="isOpen" label={openNow} />
    <ClearButton>{clearAll}</ClearButton>
  </Wrapper>
);

export default FilterNav;
