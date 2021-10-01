import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  h1 {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 11.2rem;
`;

export const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  max-height: 2.4rem;
  max-width: 12.4rem;
`;
