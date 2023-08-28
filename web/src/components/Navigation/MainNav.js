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
import Accordion from "./Accordion";

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
    #navigation-desktop {
      > li {
        > a {
          ${tw`text-gray-600`}
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
          megaMenuHovering ? tw`text-gray-600` : null}; */
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
      li {
        a {
          ${tw`font-display tracking-wider leading-5 text-gray-600 text-opacity-80 hover:text-opacity-100 no-underline`}
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

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

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
          gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, quality: 100)
        }
      }
      lightLogo: file(relativePath: { eq: "global/Logo - Light.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, quality: 100)
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
      className={`py-2.5 md:py-1 w-full transition duration-300 ease-linear ${className}`}
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
        <div className="flex-auto flex items-center md:hidden">
          <a href="tel:6199168360">
            <i
              className={`fas fa-phone-alt text-lg ${
                headerStyle === "overlap" ? "text-white" : "text-black"
              } ${offcanvasOpen || scrolled ? "text-black" : null}`}
            ></i>
          </a>
        </div>
        <div className="flex-auto flex items-center justify-center md:justify-start">
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
              className={`relative group ${subMenuHovering1 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/catering-services-san-diego/"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
              >
                Services
              </AniLink>
              <ul className="absolute flex flex-col space-y-3 w-auto bg-primary-900 shadow-3xl py-7 px-8 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-7">
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/full-service-wedding-catering/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Weddings
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/social-event-catering/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Social Events
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/corporate-catering-san-diego/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Corporate
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36">
                  <AniLink
                    fade
                    to="/mobile-food-truck-catering/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Food Truck
                  </AniLink>
                </li>
              </ul>
            </li>

            <li
              className={`relative group ${subMenuHovering2 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/menus/"
                onMouseEnter={isHoveringSubMenu2}
                onMouseLeave={notHoveringSubMenu2}
              >
                Menus
              </AniLink>
              <ul className="absolute flex flex-col space-y-3 w-auto bg-primary-900 shadow-3xl py-7 px-8 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-7">
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/wedding-catering-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Weddings
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/flavor-mobile-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Flavor Mobile
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/interactive-food-station-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Interactive Stations
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/appetizer-catering-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Small Bites
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/seasonal-catering-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Seasonal Dinner
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/dinner-catering-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Harvest Dinner Party
                  </AniLink>
                </li>
                
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/dessert-catering-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Sweet Treats
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/holiday-catering-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Holiday
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36">
                  <AniLink
                    fade
                    to="/corporate-catering-menu/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Corporate
                  </AniLink>
                </li>
                
                
                
              </ul>
            </li>

            <li
              className={`relative group ${subMenuHovering3 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/about/"
                onMouseEnter={isHoveringSubMenu3}
                onMouseLeave={notHoveringSubMenu3}
              >
                About
              </AniLink>
              <ul className="absolute flex flex-col space-y-3 w-auto bg-primary-900 shadow-3xl py-7 px-8 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-7">
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/about/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Our Company
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36 border-b border-white border-opacity-30 pb-3">
                  <AniLink
                    fade
                    to="/faqs/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    FAQs
                  </AniLink>
                </li>
                <li className="whitespace-nowrap w-36">
                  <AniLink
                    fade
                    to="/careers/"
                    className="relative font-display text-base tracking-wider leading-5 text-white hover:text-primary-50 no-underline"
                  >
                    Careers
                  </AniLink>
                </li>
                {/* <li>
                  <AniLink fade to="/blog/">
                    Blog
                  </AniLink>
                </li> */}
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
              <ul id="navigation-mobile" className="mb-20">
                <li className="mb-7">
                  <Accordion title="Services" className="submenu-parent">
                    <li>
                      <AniLink
                        fade
                        to="/catering-services-san-diego/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        All Services
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/full-service-wedding-catering/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Weddings
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/social-event-catering/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Social Events
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/corporate-catering-san-diego/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Corporate
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/mobile-food-truck-catering/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Food Truck
                      </AniLink>
                    </li>
                  </Accordion>
                </li>

                <li className="mb-7">
                  <Accordion title="Menus" className="submenu-parent">
                    <li>
                      <AniLink
                        fade
                        to="/menus/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        All Menus
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/wedding-catering-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Weddings
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/dinner-catering-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Harvest Dinner Party
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/appetizer-catering-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Small Bites
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/dessert-catering-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Sweet Treats
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/boxed-lunch-catering-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Boxed Lunch
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/flavor-mobile-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Flavor Mobile
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/holiday-catering-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Holiday
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/seasonal-catering-menu/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Seasonal Dinner
                      </AniLink>
                    </li>
                  </Accordion>
                </li>

                <li className="mb-7">
                  <Accordion title="About" className="submenu-parent">
                    <li>
                      <AniLink
                        fade
                        to="/about/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Our Company
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/faqs/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        FAQs
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/careers/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Careers
                      </AniLink>
                    </li>
                    {/* <li>
                      <AniLink
                        fade
                        to="/blog/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Blog
                      </AniLink>
                    </li> */}
                  </Accordion>
                </li>
              </ul>

              <div className="flex justify-center space-x-3 mb-12">
                <a
                  href="https://www.facebook.com/flavorchefcatering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white md:text-white bg-primary-400 hover:bg-primary-600 no-underline"
                >
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a
                  href="https://www.instagram.com/flavorchefcatering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white md:text-white bg-primary-400 hover:bg-primary-600  no-underline"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
              </div>

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
