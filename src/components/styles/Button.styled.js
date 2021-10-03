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
    background-image: url("data:image/svg+xml,%3Csvg fill='none' height='10' viewBox='0 0 7 10' width='7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1 9 4-4-4-4' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: cover;
    width: 0.8rem;
    height: 1.2rem;
    top: 48%;
    left: auto;
    right: 2.1rem;
    bottom: auto;
    transform: translateY(-50%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.cSecondary};
  }

  &:active {
    transform: scale(0.95);
  }
`;
