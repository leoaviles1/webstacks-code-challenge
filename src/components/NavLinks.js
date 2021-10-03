import React from "react";
import { Link } from "gatsby";
import { WrapperUl } from "./styles/NavLinks.styled";

export default function NavLinks({ toggleMenu }) {
  return (
    <WrapperUl className='mobile-links'>
      <li>
        <Link to='/' title="What's Included" className='nav-link' onClick={toggleMenu}>
          What's Included
        </Link>
      </li>
      <li>
        <Link to='/' title='Pricing' className='nav-link' onClick={toggleMenu}>
          Pricing
        </Link>
      </li>
      <li>
        <Link to='/' title='Sign In' className='nav-link' onClick={toggleMenu}>
          Sign In
        </Link>
      </li>
      <li>
        <Link to='/' title='Get Started' className='nav-link' onClick={toggleMenu}>
          Get Started
        </Link>
      </li>
    </WrapperUl>
  );
}
