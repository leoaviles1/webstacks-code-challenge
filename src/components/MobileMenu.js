import React, { useState } from "react";
import { MenuIconContainer, MenuIcon, MenuLinks } from "./styles/MobileMenu.styled";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const toggleMenu = () => toggleMenuOpen(!menuOpen);

  return (
    <>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <NavLinks toggleMenu={toggleMenu} />
      </MenuLinks>
    </>
  );
}
