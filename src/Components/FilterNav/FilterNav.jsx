import React from "react";
import Styled from "styled-components";
import { buttonStyles } from "~/src/Components/Common/Button";

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

const InputCheckbox = Styled.input`
  &[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: solid 1px #c8c8c8;
    border-radius: 100%;
    height: 16px;
    margin: 6px 8px 6px 0;
    position: relative;
    width: 16px;
  }

  &[type="checkbox"]:checked::before {
    background-color: #002b56;
    border-radius: 100%;
    content: "";
    height: 8px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 8px;
  }
`;
const FilterTitle = Styled.span`
  color: #606060;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 24px;
`;
const Label = Styled.label`
  color: #002b56;
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  letter-spacing: 1px;
  line-height: 16px;
`;
const Filter = Styled.div`
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
  display: inline-flex;
  margin-left: 24px;
`;

const PriceFilter = Styled.div``;
const CuisineFilter = Styled.div``;

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
    <Filter>
      <InputCheckbox id="isOpen" type="checkbox" name="isOpen" />
      <Label htmlFor="isOpen">{openNow}</Label>
    </Filter>
    <PriceFilter />
    <CuisineFilter />
    <ClearButton>{clearAll}</ClearButton>
  </Wrapper>
);

export default FilterNav;
