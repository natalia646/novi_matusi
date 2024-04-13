import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";

export default function Download() {
  return (
    <Button
      target="_blank"
      to="https://play.google.com/store/apps/details?id=tech.baza_trainee.mama_ne_vdoma"
    >
      Завантажити
    </Button>
  );
}
const Button = styled(Link)`
  font-size: 1.3vw;
  font-weight: 700;
  border-radius: 30px;
  background: ${colors.orange};
  padding: 5% 10%;
  color: white;
  border: none;
  font-family: Nunito Sans;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: ${colors.hover};
  }
  &:active {
    background-color: ${colors.activeClick};
  }
`;
