import styled from "styled-components";
import { colors, device } from "../../constants";
import photo1 from "../../assets/photo/photo1.webp";
import photo2 from "../../assets/photo/photo2.webp";
import backgDesctop from "../../assets/background/top_background.svg";
import backMobile from "../../assets/background/mobile_back.svg";
import backSquare from "../../assets/background/square-root-color.svg";

export const StyleForAllTopPart = styled.section`
  background: url(${backgDesctop}) no-repeat bottom;
  background-size: cover;
  @media ${device.mobile} {
    background: url(${backMobile}) right top 40%, url(${backSquare}) right top 320%;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const ArticleContainer = styled.div`
  width: 87%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  @media ${device.tablet} {
    width: 94%;
  }
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.7fr;
  }
`;

export const SectionForText = styled.article`
  display: grid;
  grid-template-columns: 1fr;
`;

export const H1 = styled.h1`
  grid-area: 2 / 1 / 3 / 2;
  font-size: 3.1vw;
  margin: 2% 0;
  font-weight: 700;
  @media ${device.tablet} {
    font-size: 3.5vw;
  }
  @media ${device.mobile} {
    grid-area: 1 / 1 / 2 / 2;
  }
`;
export const H2 = styled.h2`
  font-size: 1.3vw;
  grid-area: 1 / 1 / 2 / 2;
  font-weight: 700;
  margin-top: 4%;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: block;
    grid-area: 2 / 1 / 3 / 2;
  }
`;
export const Paragraf = styled.p`
  grid-area: 3 / 1 / 4 / 2;
  font-size: 1.3vw;
  @media ${device.tablet} {
    font-size: 1.5vw;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
export const Buttons = styled.nav`
  max-width: 85%;
  grid-area: 4 / 1 / 5 / 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  margin: 7% 0;

  a {
    font-size: 1.5vw;
    text-align: center;
    border-radius: 30px;
    font-family: Nunito Sans;
    cursor: pointer;
    padding: 4% 3%;
  }
  .more {
    border: 2px solid ${colors.orange};
    background: ${colors.white};
    color: ${colors.orange};
    text-decoration: none;

    &:hover {
      border: 2px solid #f46600;
      color: #f46600;
    }
    &:active {
      border: 2px solid #ce4a00;
      color: #ce4a00;
    }
  }
`;

export const SectionForImages = styled.section`
  background: url(${photo2}) right bottom, url(${photo1}) right 45% top 10%;
  background-size: 38%, 35%;
  background-repeat: no-repeat;
  @media ${device.tablet} {
    background-size: 36%, 33%;
  }
`;
