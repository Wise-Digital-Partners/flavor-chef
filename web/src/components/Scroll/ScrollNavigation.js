import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Scrollspy from "react-scrollspy";

const StyledScrollNavigation = styled.div`
  .scroll-navigation {
    ${tw`sticky top-40`}
    .scrollspy {
      ${tw`max-h-full!`}
    }
    ul {
      ${tw`flex flex-col space-y-3`}
      li {
        ${tw`font-display text-primary-400 opacity-40 leading-5 tracking-wider flex items-center`}
        &:before {
          content: "";
          ${tw`w-0 bg-primary-400 h-px transition-all duration-500 ease-in-out`}
        }
        &.is-current {
          ${tw`opacity-100`}
          &:before {
            content: "";
            ${tw`w-10 mr-4`}
          }
        }
        a {
          ${tw`no-underline`}
        }
      }
    }
  }
`;

const ScrollNavigation = ({ children, className }) => {
  // Toggle Dropdown
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const scrollNavigationList = useRef(null);

  const clickHandler = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : "400px");
  };

  return (
    <StyledScrollNavigation
      className={`${className} ${setActive}`}
      onKeyDown={clickHandler}
      onClick={clickHandler}
    >
      {/* <span className="inline text-white lg:hidden">Services Menu</span> */}
      <nav className="scroll-navigation">
        <Scrollspy
          items={["weddings", "social-events", "corporate", "flavor-mobile"]}
          offset={-100}
          currentClassName="is-current"
          ref={scrollNavigationList}
          className="scrollspy overflow-auto transition-all duration-300 ease-linear"
          style={{ maxHeight: `${setHeight}` }}
        >
          {children}
        </Scrollspy>
      </nav>
    </StyledScrollNavigation>
  );
};

export default ScrollNavigation;
