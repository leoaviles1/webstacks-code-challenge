import styled from "styled-components";
import { respondTo } from "./Responsive";

export const StyledCard = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 0.4rem;
  position: relative;
  margin: 0 1rem 6rem;
  max-width: 37rem;

  ${respondTo.xl`
    margin: 0 0 6rem;
  `}

  .card-img {
    width: 12rem;
    height: 12rem;
    background-size: contain;
    position: absolute;
    top: -5.9rem;
    right: -3.1rem;
    left: auto;
    bottom: auto;

    ${respondTo.md`
      width: 15rem;
      height: 15rem;
    `}

    ${respondTo.lg`
      width: 20rem;
      height: 20rem;
      background-size: auto;
    `}

    &-2 {
      ${respondTo.md`
        right: -2.6rem;
      `}
    }

    &-3 {
      ${respondTo.md`
        right: -2.8rem;
      `}

      ${respondTo.lg`
        right: -6.8rem;
      `}

      ${respondTo.xl`
        right: -5.4rem;
      `}

      ${respondTo.xxl`
        right: -6.8rem;
      `}
    }
  }

  .copy-wrapper {
    margin: 1.8rem 0 2.8rem;
    padding: 0 3.2rem;

    ${respondTo.md`
      margin: 5.8rem 0 3.3rem;
    `}

    ${respondTo.lg`
      margin: 10.8rem 0 3.3rem;
    `}

    .title {
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .snippet {
      font-size: 1.44rem;
      margin-bottom: 1.7rem;
    }
  }

  .card-btn {
    height: auto;
    background-color: transparent;
    padding: 0 1.4rem 0 0;

    &:after {
      right: 0;
      background-image: url("data:image/svg+xml,%3Csvg fill='none' height='10' viewBox='0 0 7 10' width='7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1 9 4-4-4-4' stroke='%23F65928' stroke-width='2'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
    }

    &:hover {
      background-color: transparent;

      a {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.cSecondary};
      }

      &:after {
        background-image: url("data:image/svg+xml,%3Csvg fill='none' height='10' viewBox='0 0 7 10' width='7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1 9 4-4-4-4' stroke='%23767D84' stroke-width='2'/%3E%3C/svg%3E");
      }
    }

    a {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
