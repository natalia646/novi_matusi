import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";

export default function Download() {
  return (
    <Link
      target="_blank"
      to="https://play.google.com/store/apps/details?id=tech.baza_trainee.mama_ne_vdoma"
    >
      <Button>Завантажити</Button>
    </Link>
  );
}
const Button = styled.button`
  font-size: 1.3vw;
  font-weight: 700;
  border-radius: 30px;
  background: ${colors.orange};
  padding: 9px 25px;
  color: white;
  border: none;
  font-family: Nunito Sans;
  cursor: pointer;

  &:hover {
    background-color: ${colors.hover};
  }
  &:active {
    background-color: ${colors.activeClick};
  }
`;