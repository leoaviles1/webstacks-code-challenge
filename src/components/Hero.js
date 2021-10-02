import * as React from "react";
import { HeroContainer } from "./styles/Hero.styled";
import SiteButton from "../components/Button";
import { MaxWidthContainer } from "./styles/MaxWidthContainer.styled";

export default function Hero() {
  return (
    <HeroContainer>
      <div className='bgDiv'>
        <MaxWidthContainer className='content-wrapper'>
          <h2>America's #1 Rated Adventure Plateform</h2>
          <h1>Take control of your weekends</h1>
          <p>Find adventure anywhere.</p>
          <SiteButton pageLink='/about' pageTitle='Get Started'>
            Get Started
          </SiteButton>
          <SiteButton pageLink='/' pageTitle='Request a demo'>
            Request a Demo
          </SiteButton>

          <ul>{/* <Card></Card> */}</ul>
        </MaxWidthContainer>
      </div>
    </HeroContainer>
  );
}
