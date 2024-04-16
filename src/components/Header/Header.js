import React, { useState } from "react";
import logo from "../../assets/logo_icon/icon_mama.svg";
import closed_menu from "../../assets/icons/open-burger.svg";
import opened_menu from "../../assets/icons/close-burger.svg";
import { NavLink } from "react-router-dom";
import { constants } from "../../constants";
import Download from "../ButtonDow/Download";
import {
  HeaderContainer,
  Navigation,
  Link,
  Logo,
  BurgerMenu,
} from "./Header.styled";

const [like0, link1, link2, link3] = constants;

const Header = () => {
  const [closedBurger, setClosedBurger] = useState(true);
  const clickLink = () => {
    setClosedBurger(true);
  };

  return (
    <HeaderContainer>
      <NavLink to="/" onClick={clickLink}>
        <Logo src={logo} alt="logo" />
      </NavLink>

      <div className={closedBurger ? "closed" : "opened"}>
        <Navigation>
          {[like0, link1, link2, link3].map((link) => (
            <Link key={link.id} to={link.link} onClick={clickLink}>
              {link.nameLink}
            </Link>
          ))}
          <Download />
        </Navigation>
      </div>

      <BurgerMenu
        src={closedBurger ? closed_menu : opened_menu}
        alt="menu"
        onClick={() => setClosedBurger(!closedBurger)}
      ></BurgerMenu>
    </HeaderContainer>
  );
};

export default Header;
