import styled from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1.1rem 2.4rem;
  background-color: ${({ cPrimary }) => cPrimary || "#2885F6"};
  color: ${({ white }) => white || "#fff"};
  transition: color 0.3s linear, background-color 0.3s linear, border-color 0.3s linear;

  &:hover {
    background-color: ${({ cSecondary }) => cSecondary || "#767D84"};
  }
`;
