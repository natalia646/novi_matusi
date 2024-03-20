import styled from "styled-components";
import { colors} from "../../constants";

export const ArticleContainer = styled.article`
  width: 86%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
`;

export const SectionForText = styled.section`
  max-width: 604px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const H1 = styled.h1`
  grid-area: 2 / 1 / 3 / 2;
  font-size: 3.1vw;
`;
export const H2 = styled.h2`
  font-size: 1.3vw;
  grid-area: 1 / 1 / 2 / 2;
`;
export const Paragraf = styled.p`
  grid-area: 3 / 1 / 4 / 2;
  font-size: 1.3vw;
`;

export const Buttons = styled.div`
  grid-area: 4 / 1 / 5 / 2;
  display: flex;
  justify-content: space-around;

  a {
    width: 100%;
    max-width: 14rem;
    padding: 1.7% 3%;
    font-size: 1.6vw;
    text-align: center;
    border-radius: 30px;
    font-family: Nunito Sans;
    cursor: pointer;
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

export const SectionForImages = styled.section``;
