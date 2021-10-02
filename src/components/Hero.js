import * as React from "react";
import { HeroContainer } from "./styles/Hero.styled";
import SiteButton from "../components/Button";
import { MaxWidthContainer } from "./styles/MaxWidthContainer.styled";
import { StaticQuery, graphql } from "gatsby";
import Card from "./Card";

export default function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allContentfulHero {
            edges {
              node {
                heroHeading
                heroSubheading
                heroTitle
                heroBackground {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          {data.allContentfulHero.edges.map(({ node, index }) => (
            <HeroContainer>
              <img key='index' src={node.heroBackground.fluid.src} alt='Hero'></img>

              <MaxWidthContainer className='content-wrapper'>
                <div key={index} className='hero-content'>
                  <h5 key={index}>{node.heroTitle}</h5>
                  <h1 key={index}>{node.heroHeading}</h1>
                  <p key={index}>{node.heroSubheading}</p>
                </div>

                <SiteButton pageLink='/about' pageTitle='Get Started'>
                  Get Started
                </SiteButton>
                <SiteButton pageLink='/' pageTitle='Request a demo'>
                  Request a Demo
                </SiteButton>

                <ul>
                  <Card />
                </ul>
              </MaxWidthContainer>
            </HeroContainer>
          ))}
        </>
      )}
    />
  );
}
