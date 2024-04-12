import React from "react";
import {
  StyleForAllHow,
  ArticleContainer,
  H3,
  Paragraf,
  Blocks,
  Block,
} from "./HowItWork.styled";

const HowItWork = () => {
  return (
    <StyleForAllHow>
      <ArticleContainer>
        <H3>Як це працює?</H3>
        <Paragraf>
          Вам потрібно йти на роботу? Ви шукаєте дитячий садок для своїх дітей?
          <br /> Більшість послуг дитячого садка недоступні або занадто дорогі
          для вас? <br /> Ми допоможемо знайти поруч мам з такими ж проблемами!
        </Paragraf>
        <Blocks></Blocks>
      </ArticleContainer>
    </StyleForAllHow>
  );
};

export default HowItWork;
