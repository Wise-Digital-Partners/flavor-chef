import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import styled from "@emotion/styled";
import tw from "twin.macro";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
// import ButtonGhost from "../Button/ButtonGhost";
// import Accordion from "./Accordion";

const StyledMainNav = styled.nav`
  ${({ headerStyle }) => (headerStyle === "hidden" ? tw`hidden` : null)};
  ${({ headerHasBorder }) =>
    headerHasBorder
      ? tw`border-b border-solid border-white border-opacity-40`
      : null};
  /* @media (min-width: 1024px) {
        ${({ megaMenuHovering }) => (megaMenuHovering ? tw`bg-white` : null)};
    } */
  @media (max-width: 1023px) {
    ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-white` : null)};
    /* ${({ headerStyle }) =>
      headerStyle === "overlap" ? tw`bg-white` : null};  */
  }
  &[data-fixed="true"] {
    ${tw`fixed top-0 left-0 w-full bg-white z-20`}
    @media (max-width: 1023px) {
      ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-900` : null)};
    }
    #navigation-desktop {
      > li {
        > a {
          ${tw`text-gray-700`}
        }
      }
    }
    .logo-initial {
      ${tw`hidden`}
    }
    .logo-fixed {
      ${tw`block`}
    }
  }
  #navigation-desktop {
    > li {
      &:not(:last-child) {
        ${tw`lg:mr-8`}
      }
      > a {
        ${({ headerLinkColor }) =>
          headerLinkColor === "white" ? tw`text-white` : tw`text-gray-600`};
        /* ${({ megaMenuHovering }) =>
          megaMenuHovering ? tw`text-gray-700` : null}; */
        ${tw`relative font-display text-base tracking-wider no-underline pb-8`}
        &:after {
          ${tw`content absolute bottom-0 right-0 left-0 mx-auto h-0.5	 w-0 bg-primary-400 transform -translate-y-6 transition-all duration-300 ease-linear`}
        }
        &:hover {
          &:after {
            ${tw`w-full`}
          }
        }
      }
      &.active {
        &:after {
          ${tw`w-8`}
        }
      }
    }
    .submenu-parent {
      ${tw`relative`}
      .submenu {
        ${tw`absolute flex flex-col space-y-3 w-auto bg-primary-900 shadow-3xl py-7 px-8 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
        li {
          ${tw`whitespace-nowrap w-36`}
          &:not(:last-child) {
            ${tw`border-b border-white border-opacity-30 pb-3`}
          }
          a {
            ${tw`relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline`}
          }
        }
      }
      &:hover {
        .submenu {
          ${tw`opacity-100 visible translate-y-7`}
        }
      }
    }
  }

  #navigation-mobile {
    > li {
      ${tw`flex justify-center text-center space-y-10`}
      > a,
      button {
        ${tw`font-heading text-6xl text-gray-600 hover:text-gray-600 font-bold no-underline text-left focus:outline-none transition-colors duration-300 ease-linear`}
      }
    }
    .submenu {
      ${tw`flex-col pl-6`}
      li {
        &:not(:last-child) {
          ${tw`mb-2`}
        }
        a {
          ${tw`text-white hover:text-primary-400`}
        }
      }
    }
  }
`;

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  // Hover on parent links
  // const [megaMenuHovering, setMegaMenuHovering] = useState(false);
  // const isHoveringMegaMenu = () => setMegaMenuHovering(true);
  // const notHoveringMegaMenu = () => setMegaMenuHovering(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/Logo - Dark.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 301
            placeholder: NONE
            quality: 100
          )
        }
      }
      lightLogo: file(relativePath: { eq: "global/Logo - Light.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 301
            placeholder: NONE
            quality: 100
          )
        }
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    className = null;

  if (headerStyle === "overlap") {
    initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  // Change logo on mega menu reveal
  // if (megaMenuHovering) {
  //     initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  // }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  return (
    <StyledMainNav
      id="main-navigation"
      className={`py-1 md:py-1 w-full transition duration-300 ease-linear ${className}`}
      role="navigation"
      aria-label="main-navigation"
      data-fixed={scrolled}
      headerStyle={headerStyle}
      headerHasBorder={headerHasBorder}
      headerLinkColor={headerLinkColor}
      // megaMenuHovering={megaMenuHovering}
      offcanvasOpen={offcanvasOpen}
    >
      <div className="container flex justify-between items-center">
        <div className="flex-auto flex items-center">
          <AniLink fade to="/">
            <div className="logo-initial">
              <GatsbyImage
                image={initialLogo}
                alt="Flavor Chef Logo"
                className="w-[168px] md:w-[301px]"
              />
            </div>
            <div className="logo-fixed hidden">
              <GatsbyImage
                image={stickyLogo}
                alt="Flavor Chef Logo"
                className="w-[168px] md:w-[301px]"
              />
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:items-center lg:justify-end lg:mr-10"
          >
            <li
              className={`submenu-parent ${subMenuHovering1 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/catering-services-san-diego/"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
              >
                Services
              </AniLink>
              <ul className="submenu">
                <li>
                  <AniLink fade to="/full-service-wedding-catering/">
                    Weddings
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/social-event-catering/">
                    Social Events
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/corporate-catering-san-diego/">
                    Corporate
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/mobile-food-truck-catering/">
                    Food Truck
                  </AniLink>
                </li>
              </ul>
            </li>

            <li>
              <AniLink fade to="/menus/">
                Menus
              </AniLink>
            </li>

            <li
              className={`submenu-parent ${subMenuHovering2 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/about/"
                onMouseEnter={isHoveringSubMenu2}
                onMouseLeave={notHoveringSubMenu2}
              >
                About
              </AniLink>
              <ul className="submenu">
                <li>
                  <AniLink fade to="/about/">
                    Our Company
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/faqs/">
                    FAQs
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/careers/">
                    Careers
                  </AniLink>
                </li>
              </ul>
            </li>
          </ul>
          <div className="hidden lg:inline-flex items-center">
            <ButtonSolid as="button" modal="modal-contact" text="Contact Us" />
          </div>

          <div className="lg:hidden" ref={node}>
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <ul id="navigation-mobile" className="mb-16">
                <li className="mb-8">
                  <AniLink
                    fade
                    to="#"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                  >
                    Services
                  </AniLink>
                </li>
                <li className="mb-8">
                  <AniLink
                    fade
                    to="#"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                  >
                    Menus
                  </AniLink>
                </li>
                <li className="mb-8">
                  <AniLink
                    fade
                    to="#"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                  >
                    About
                  </AniLink>
                </li>
              </ul>

              <div className="flex justify-center">
                <ButtonSolid
                  as="button"
                  modal="modal-contact"
                  text="Contact Us"
                />
              </div>
            </OffCanvas>
          </div>
        </div>
      </div>
    </StyledMainNav>
  );
};
export default MainNav;
