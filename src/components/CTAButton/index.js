import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 4px;
  background: linear-gradient(to right, #67b26b, #4ca2cb);
  border: none;
  color: #FFFFFF;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px;
  width: 150px;
  transition: all 0.4s;
  margin: 5px;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:hover span {
    padding-right: 25px;
    &:after {
      opacity: 1;
      right: 0;
    }
  }
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
    &:after {
      content: '\00bb';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }
}`;

const CTAButton = ({ onClick, text, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    <span>{text}</span>
  </StyledButton>
);

CTAButton.proptypes = {
  onClick: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired
};

export default CTAButton;
