import styled from "styled-components";
import { respondTo } from "./Responsive";

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${respondTo.lg`
    display: none;
  `}
`;

export const MenuIcon = styled.button`
  position: absolute;
  top: 4.6rem;
  right: 2rem;
  bottom: auto;
  left: auto;
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2.3rem;
  outline: thin-dotted;
  z-index: 11;

  div {
    width: 2.3rem;
    height: 0.3rem;
    background: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 0.3s, transform 0.3s;

    &:first-child {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) => (menuOpen ? "translateX(-1rem)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

export const MenuLinks = styled.nav`
  background: #000;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transition: transform 0.3s linear;
  transform: ${({ menuOpen }) => (menuOpen ? "translateY(0)" : "translateY(-100%)")};

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    margin: 0;

    li {
      list-style: none;
      margin: 1rem 0;
    }

    a {
      font-size: 2.5rem;
      font-weight: 600;
      text-decoration: none;
      color: #fff;
      transition: color 0.3s linear;
    }
  }
`;
