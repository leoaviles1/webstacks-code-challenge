import styled from "styled-components";

import { respondTo } from "./Responsive";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .bgDiv {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 75% center;
    background-repeat: no-repeat;
    position: relative;
  }

  .content-wrapper {
    position: relative;
    z-index: 99;
    padding-top: 14rem;
  }

  .hero-content {
    text-align: center;
    margin-bottom: 3rem;

    ${respondTo.lg`
      text-align: left;
    `}

    h1,
    h5,
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    h1 {
      max-width: 30rem;
      margin-left: auto;
      margin-right: auto;

      ${respondTo.md`
        max-width: 37.5rem;
      `}

      ${respondTo.lg`
        max-width: 42rem;
        margin-left: 0;
        margin-right: 0;
      `}
    }
  }

  .button-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${respondTo.lg`
    justify-content: flex-start;
    `}

    Button {
      margin-bottom: 2rem;
      margin-right: 2.1rem;
    }
  }
`;
