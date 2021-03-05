import Styled, { css } from "styled-components";

export const buttonStyles = css`
  border: 1px solid #002b56;
  border-radius: 2px;
  color: #002b56;
  cursor: pointer;
  font-size: 14px;
  height: 48px;
  letter-spacing: 0.857143px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
`;

export default Styled.button`
  ${buttonStyles}
`;
