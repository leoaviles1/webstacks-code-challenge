import styled from "styled-components";

export const StyledButton = styled.button`
  height: 4rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  font-size: 1.44rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;
  padding: 1.1rem 3.6rem 1.1rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.cPrimary};
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s linear, background-color 0.3s linear, border-color 0.3s linear, transform 0.2s linear;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    top: 47%;
    left: auto;
    right: 2.1rem;
    bottom: auto;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.white};
    border-right: 0.2rem solid ${({ theme }) => theme.colors.white};
    rotate: -45deg;
    transform: translateY(-50%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.cSecondary};
  }

  &:active {
    transform: scale(0.95);
  }
`;
