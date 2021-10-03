import styled from "styled-components";
import { respondTo } from "./Responsive";

export const HeroContainer = styled.div`
  background-color: #000;

  .bg-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }

  .hero-bg {
    background-position: 75% center;
  }

  .content-wrapper {
    position: relative;
    padding-top: 14rem;
  }

  .hero-content {
    text-align: center;
    margin-bottom: 3rem;

    ${respondTo.xl`
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
        max-width: 42rem;
      `}

      ${respondTo.xl`
        margin-left: 0;
        margin-right: 0;
      `}
    }
  }

  .button-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${respondTo.xl`
      justify-content: flex-start;
    `}

    Button {
      margin-bottom: 2rem;
      margin-right: 2.1rem;
    }

    .inverted {
      background-color: ${({ theme }) => theme.colors.cSecondary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.cPrimary};
      }
    }
  }

  .card-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 9.2rem;

    ${respondTo.lg`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    `}

    ${respondTo.xl`
      justify-content: space-between    
    `}
  }
`;
