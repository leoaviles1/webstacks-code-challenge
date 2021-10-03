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
                heroId
                heroTitle
                heroHeading
                heroSubheading
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
          {data.allContentfulHero.edges.map(({ node }) => (
            <HeroContainer key={node.heroId}>
              <div className='bgDiv' style={{ backgroundImage: `url( "${node.heroBackground.fluid.src}" )` }}>
                <MaxWidthContainer className='content-wrapper'>
                  <div className='hero-content'>
                    <h5>{node.heroTitle}</h5>
                    <h1>{node.heroHeading}</h1>
                    <p>{node.heroSubheading}</p>
                  </div>
                  <div className='button-wrap'>
                    <SiteButton pageLink='/about' pageTitle='Get Started' customClass='get-started'>
                      Get Started
                    </SiteButton>
                    <SiteButton pageLink='/' pageTitle='Request a demo'>
                      Request a Demo
                    </SiteButton>
                  </div>

                  <ul>
                    <Card />
                  </ul>
                </MaxWidthContainer>
              </div>
            </HeroContainer>
          ))}
        </>
      )}
    />
  );
}
