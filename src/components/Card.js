import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

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
            <div key={node.cardId} className='card-wrapper'>
              <img src={node.cardImage.fluid.src} alt='Card icon'></img>
              <h1>{node.cardTitle}</h1>
              <h5>{node.cardCopy}</h5>
            </div>
          ))}
        </>
      )}
    />
  );
}
