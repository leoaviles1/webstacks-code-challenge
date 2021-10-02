import styled from "styled-components";
import img from "/Users/leoaviles/Desktop/Leo/code-challenges/webstacks-code-challenge/public/images/hero-background@2x.png";
import { respondTo } from "./Responsive";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .bgDiv {
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-size: cover;
    background-position: 75% center;
    background-repeat: no-repeat;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: auto;
      right: auto;
      bottom: auto;
      background: linear-gradient(360deg, #000000 13.96%, rgba(0, 0, 0, 0) 107.34%);
    }

    ${respondTo.lg`
    background-position: center 0%;
  `}
  }

  .content-wrapper {
    position: relative;
    z-index: 99;
    padding-top: 11.2rem;
  }
`;
