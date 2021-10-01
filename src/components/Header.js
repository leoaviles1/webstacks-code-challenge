import * as React from "react";
import { Link } from "gatsby";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src='./images/brackets-logo.svg' alt='Home' />
        <ul>
          <li>
            <Link to='/' title='Home'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' title='About'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' title='Contact'>
              Contact
            </Link>
          </li>
          <Button>Get Started</Button>
        </ul>
      </Nav>
    </StyledHeader>
  );
}
