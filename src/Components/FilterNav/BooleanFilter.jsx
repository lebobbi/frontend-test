import React from "react";
import Styled from "styled-components";

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

const Label = Styled.label`
  color: #002b56;
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  letter-spacing: 1px;
  line-height: 16px;
  margin: 6px 0;
`;

const Filter = Styled.div`
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
  display: inline-flex;
  margin-left: 24px;
`;

const FilterNav = ({ label, name }) => (
  <Filter>
    <InputCheckbox id={name} type="checkbox" name={name} />
    <Label htmlFor={name}>{label}</Label>
  </Filter>
);

export default FilterNav;
