import styled from "styled-components";
import { respondTo } from "./Responsive";

export const StyledHeader = styled.header`
  display: block;
  position: fixed;
  /* top: 0; */
  width: 100%;
  background: 0;
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 11.2rem;

  .action-items {
    display: none;

    ${respondTo.lg`
      display: flex;
      align-items: center;
    `}
  }

  li {
    list-style: none;
  }

  .nav-link {
    color: ${({ theme }) => theme.colors.white};
    padding: 1.1rem 1.6rem;

    &:hover {
      color: ${({ theme }) => theme.colors.cPrimary};
    }
  }

  .get-started {
    margin-left: 1.3rem;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  max-width: 12.4rem;
`;
