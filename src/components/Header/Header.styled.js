import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, device } from "../../constants";

export const HeaderContainer = styled.header`
  margin: 1.5rem auto;
  width: 87%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: sticky; */

  @media ${device.tablet} {
    width: 94%;
    .button {
      display: none;
    }
  }
`;
export const Logo = styled.img`
  width: 100%;
  max-width: 3rem;
  height: auto;
`;
export const Navigation = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr) 1.2fr repeat(2, 1fr);
  grid-column-gap: 1rem;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1.4fr 1fr;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3vw;
  font-weight: 400;
  color: ${colors.black};
`;

export const BurgerMenu = styled.img`
width: 100%;
max-width: 3rem;
height: auto;
display: none;

@media ${device.mobile} {
  display: block;
}
`