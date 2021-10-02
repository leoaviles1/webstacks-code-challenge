import * as React from "react";
import { Link } from "gatsby";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import SiteButton from "../components/Button";
import { MaxWidthContainer } from "./styles/MaxWidthContainer.styled";

export default function Header() {
  return (
    <StyledHeader>
      <MaxWidthContainer>
        <Nav>
          <Link to='/' title='Home'>
            <Logo src='./images/brackets-logo.svg' alt='Home' />
          </Link>
          <ul className='action-items'>
            <li>
              <Link to='/' title="What's Included" className='nav-link'>
                What's Included
              </Link>
            </li>
            <li>
              <Link to='/' title='Pricing' className='nav-link'>
                Pricing
              </Link>
            </li>
            <li>
              <Link to='/' title='Sign In' className='nav-link'>
                Sign In
              </Link>
            </li>
            <SiteButton pageLink='/about' pageTitle='Get Started' className='get-started'>
              Get Started
            </SiteButton>
          </ul>
        </Nav>
      </MaxWidthContainer>
    </StyledHeader>
  );
}
