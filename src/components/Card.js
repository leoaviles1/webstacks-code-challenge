import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { StyledCard } from "./styles/Card.styled";
import SiteButton from "../components/Button";

export default function Card() {
  return (
    <StaticQuery
      query={graphql`
        query CardQuery {
          allContentfulCardsCopy {
            edges {
              node {
                cardId
                cardTitle
                cardCopy
                cardImage {
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
          {data.allContentfulCardsCopy.edges.map(({ node }) => (
            <StyledCard key={node.cardId} className={`card-wrapper card-${node.cardId}`}>
              <div
                className={`card-img bgDiv card-img-${node.cardId}`}
                style={{ backgroundImage: `url( "${node.cardImage.fluid.src}" )` }}></div>
              <div className='copy-wrapper'>
                <h5 className='title'>{node.cardTitle}</h5>
                <div className='snippet'>{node.cardCopy}</div>
                <SiteButton pageLink='/' pageTitle='Learn More' customClass='card-btn'>
                  Learn more
                </SiteButton>
              </div>
            </StyledCard>
          ))}
        </>
      )}
    />
  );
}
