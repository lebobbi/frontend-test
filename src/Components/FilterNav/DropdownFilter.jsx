import React, { useCallback, useState } from "react";
import Styled from "styled-components";
import { Caret } from "~/src/Components/Svg";

const InputRadio = Styled.input`
  &[type="radio"] {
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

  &[type="radio"]:checked::before {
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
  position: relative;
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
  display: inline-flex;
  margin-left: 24px;
`;

const Details = Styled.div`
  background-color: #fff;
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1), inset 0px -1px 0px #C8C8C8;
  display: flex;
  flex-direction: column;
  padding: 16px 20px 16px 16px;
  position: absolute;
  top: 28px;
`;

const Item = Styled.div`
  display: flex;
`;

const StyledCaret = Styled(Caret)`
  margin-left: 47px;

  &.open {
    transform: rotateX(180deg);
  }
`;

const DropdownFilter = ({ options, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <Filter>
      <Label onClick={openHandler}>
        {name}
        <StyledCaret className={isOpen && "open"} />
      </Label>
      {isOpen && (
        <Details>
          {options.map(({ value, label }) => {
            const id = `${name}-${value}`;
            return (
              <Item key={id}>
                <InputRadio type="radio" name={name} id={id} />
                <Label htmlFor={id}>{label}</Label>
              </Item>
            );
          })}
        </Details>
      )}
    </Filter>
  );
};

export default DropdownFilter;
