import React from "react";
import Download from "../ButtonDow/Download";
import { Link } from "react-router-dom";
import {
  StyleForAllTopPart,
  ArticleContainer,
  SectionForText,
  H1,
  H2,
  Paragraf,
  SectionForImages,
  Buttons,
} from "./TopPart.styled";

const TopPart = () => {
  return (
    <StyleForAllTopPart>
      <ArticleContainer>
        <SectionForText>
          <H1>
            Отримай можливість <br />
            працювати, в той час, як{" "}
            <span style={{ color: "#2000C1" }}>
              <br />
              діти щасливі та у безпеці!
            </span>
          </H1>
          <H2>Долучайся до спільноти</H2>
          <Paragraf>
            Ми допоможемо тобі знайти поруч мам, з якими можна разом доглядати
            за вашими дітьми. Об’єднайте дітей у дитячі групи та доглядайте за
            ними по черзі у вільний час.
          </Paragraf>
          <Buttons>
            <Download />
            <Link className="more" to="/">
              Дивитися більше
            </Link>
          </Buttons>
        </SectionForText>
        <SectionForImages />
      </ArticleContainer>
    </StyleForAllTopPart>
  );
};

export default TopPart;
