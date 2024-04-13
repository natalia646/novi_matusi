import styled from "styled-components";
import { colors, device } from "../../constants";

export const StyleForAllHow = styled.article`
  background-color: ${colors.root};
`;

export const ArticleContainer = styled.section`
  width: 87%;
  color: ${colors.white};
  text-align: center;
  margin: auto;
`;
export const H3 = styled.h3`
  font-size: 2.7vw;
`;
export const Paragraf = styled.p`
  font-size: 1.3vw;
`;
export const Blocks = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2%;
  color: ${colors.black};
`;
export const Block = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: ${colors.white};
  border-radius: 30px;
  margin: auto;

  
  img {
    width: 100%;
    max-width: 80px;
    height: auto;
    /* margin: 4% 0 0 0; */
  }
  /* 
  h4{
    font-size: 1.4vw;
    /* margin: 1rem ;
  }
  p{
    margin: 0 6% 2% 6%;
    font-size: 1.1vw;
  }  */
`;
