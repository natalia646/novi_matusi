import React, { useState } from "react";
import logo from "../../assets/logo_icon/icon_mama.svg";
import open from "../../assets/icons/open-burger.svg";
import close from "../../assets/icons/close-burger.svg";
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

const [closeBurger, setCloseBurger] = useState(true);


  return (
    <HeaderContainer>
      <NavLink className="logo">
        <Logo src={logo} alt="logo" />
      </NavLink>

      <Navigation>
        {[like0, link1, link2, link3].map((link) => (
          <Link key={link.id} to={link.link}>
            {link.nameLink}
          </Link>
        ))}
        <span className="button">
          <Download />
        </span>
      </Navigation>

        <BurgerMenu src={closeBurger ? open : close} alt="menu" onClick={()=> setCloseBurger(!closeBurger)}></BurgerMenu>
    </HeaderContainer>
  );
};

export default Header;
