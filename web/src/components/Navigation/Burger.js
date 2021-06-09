import React from "react";
import { bool, func } from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledBurger = styled.button`
  .line {
    ${({ headerStyle }) =>
      headerStyle === "overlap" ? tw`bg-white` : tw`bg-black`};
    ${({ scrolled }) => (scrolled ? tw`bg-black` : null)};
    transform-origin: 1px;
    ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-black` : null)};
    &:first-of-type {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-of-type(2) {
      opacity: ${({ offcanvasOpen }) => (offcanvasOpen ? "0" : "1")};
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "translateX(20px)" : "translateX(0)"};
    }
    &:nth-of-type(3) {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "translateY(1px) rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const Burger = ({ offcanvasOpen, setOffcanvasOpen, headerStyle, scrolled }) => {
  const isExpanded = offcanvasOpen ? true : false;
  return (
    <StyledBurger
      className="flex flex-col justify-between w-auto h-4 bg-transparent border-0 cursor-pointer focus:outline-none relative z-30"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      offcanvasOpen={offcanvasOpen}
      onClick={() => setOffcanvasOpen(!offcanvasOpen)}
      headerStyle={headerStyle}
      scrolled={scrolled}
    >
      <div className="line relative w-6 h-px z-10 transition-all duration-300 ease-linear" />
      <div className="line relative w-3 h-px z-10 transition-all duration-300 ease-linear" />
      <div className="line relative w-6 h-px z-10 transition-all duration-300 ease-linear" />
    </StyledBurger>
  );
};

Burger.propTypes = {
  offcanvasOpen: bool.isRequired,
  setOffcanvasOpen: func.isRequired,
};

export default Burger;
