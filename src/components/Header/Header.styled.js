import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, device } from "../../constants";

export const Logo = styled.img`
  width: 100%;
  max-width: 3rem;
  height: auto;
`;

export const HeaderContainer = styled.header`
  margin: 1.5rem auto;
  width: 87%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${colors.white}; */

  @media ${device.tablet} {
    width: 94%;
    .closed {
      display: none;
    }
    .opened {
      display: block;
    }
  }
`;

export const Navigation = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr) 1.2fr repeat(2, 1fr);
  grid-column-gap: 1rem;
  text-align: center;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #000000bc;
    left: 0;
    top: 11%;
    /* transition: all 0.1s; */
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3vw;
  font-weight: 400;
  color: ${colors.black};

  @media ${device.tablet} {
    text-align: end;
    color: #fff;
    width: 90%;
    padding: 1rem;
    /* transition: all 0.3s ease; */
    font-size: 4vw;
    font-weight: 600;
  }
`;

export const BurgerMenu = styled.img`
  width: 100%;
  max-width: 3rem;
  height: auto;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
