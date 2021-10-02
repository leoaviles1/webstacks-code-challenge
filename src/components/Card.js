import * as React from "react";
// import { Link } from "gatsby";
// import { Button } from "./styles/Button.styled";
import { StaticQuery, graphql } from "gatsby";

export default function Card() {
  return (
    <StaticQuery
      query={graphql`
        query CardQuery {
          allContentfulCardsCopy {
            edges {
              node {
                cardCopy
                cardTitle
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
          {data.allContentfulCardsCopy.edges.map(({ node, index }) => (
            <div className='card-wrapper'>
              <img key={index} src={node.cardImage.fluid.src} alt='Card icon'></img>
              <h1 key={index}>{node.cardTitle}</h1>
              <h5 key={index}>{node.cardCopy}</h5>
            </div>
          ))}
        </>
      )}
    />
  );
}
