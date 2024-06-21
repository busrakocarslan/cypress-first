import React, { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink, A } from "./NavbarStyles";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo data-test="homeLogo" onClick={() => setIsOpen(false)} to="/home">
        <i>Intercontinental</i>
        <span> recipe</span>
      </Logo>

      <Hamburger data-test="homeHamburger" onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu hamburOpen={isOpen}>
        <MenuLink
          data-test="homeAbout"
          to="/about"
          onClick={() => setIsOpen(!isOpen)}
        >
          About
        </MenuLink>

        <A data-test="homeGithub" href="https://medium.com/@busrakocarslan" target="_blank">
          Medium
        </A>

        <MenuLink
          data-test="homeLogout"
          onClick={() => setIsOpen(!isOpen)}
          onMouseUp={() => sessionStorage.clear()}
          to="/"
        >
          LOGOUT
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
