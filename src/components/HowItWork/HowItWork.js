import React from "react";
import location from "../../assets/icons/location.svg";
import group from "../../assets/icons/group.svg";
import wallet from "../../assets/icons/wallet.svg";
import {
  StyleForAllHow,
  ArticleContainer,
  H3,
  Paragraf,
  Blocks,
  Block,
} from "./HowItWork.styled";

const icons = [location, group, wallet];
const title = ["Обирай локацію", "Створюй групи", "Працюй спокійно"];
const desc = [
  "знаходь поблизу себе інших мам, що також потребують догляду за своєю дитиною",
  "шукай чи створюй групи для вирішення спільної проблеми за бажаним місцем проживання, віком дитини, розкладом мами",
  "та допомагай іншим мамам отримати таку можливість, завдяки догляду за вашими дітьми",
];

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
        <Blocks>
          {icons.map((icon, i) => (
            <Block key={i}>
              <img src={icon} alt="icon"></img>
              <h4>{title[i]}</h4>
              <p>{desc[i]}</p>
            </Block>
          ))}
        </Blocks>
      </ArticleContainer>
    </StyleForAllHow>
  );
};

export default HowItWork;
