import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const citiesClickHandler = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo - Light.png" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <footer className="bg-primary-900 pt-20 lg:pt-22 pb-10 lg:pb-6 text-center md:text-left">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-16 lg:space-y-0 lg:space-x-6 mb-20 lg:mb-28">
            <div>
              <AniLink fade to="/">
                <img
                  src={data.logo.publicURL}
                  alt="Flavor Chef Logo"
                  width="258"
                  className="mx-auto lg:mx-0"
                />
              </AniLink>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-16 lg:space-y-0 lg:space-x-18">
                <div>
                  <div className="font-display text-white tracking-wider leading-5 mb-3 lg:mb-4">
                    Address
                  </div>

                  <a
                    href="https://goo.gl/maps/FTkmRukcHTbWY7YW7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm no-underline font-normal text-white hover:text-white text-opacity-80 hover:text-opacity-100"
                  >
                    <address className="not-italic">
                      1175 Park Center Dr Vista,
                      <br /> CA 92081
                    </address>
                  </a>
                </div>
                <div>
                  <div className="font-display text-white tracking-wider leading-5 mb-3 lg:mb-4">
                    Contact
                  </div>

                  <ul>
                    <li>
                      <a
                        href="tel:619-430-3981"
                        className="text-sm no-underline font-normal text-white hover:text-white text-opacity-80 hover:text-opacity-100"
                      >
                        (619) 430-3981
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:flavorchefcatering@gmail.com"
                        className="text-sm no-underline font-normal text-white hover:text-white text-opacity-80 hover:text-opacity-100"
                      >
                        flavorchefcatering@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-display text-white tracking-wider leading-5 mb-3 lg:mb-4">
                    Contact
                  </div>
                  <ul>
                    <li>
                      <AniLink
                        fade
                        to="/about/"
                        className="text-sm no-underline font-normal text-white hover:text-white text-opacity-80 hover:text-opacity-100"
                      >
                        About Us
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/faqs/"
                        className="text-sm no-underline font-normal text-white hover:text-white text-opacity-80 hover:text-opacity-100"
                      >
                        FAQs
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/careers/"
                        className="text-sm no-underline font-normal text-white hover:text-white text-opacity-80 hover:text-opacity-100"
                      >
                        Careers
                      </AniLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-40"></div>

        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between items-center pt-10 lg:pt-4">
            <div className="lg:flex lg:items-center order-2 lg:order-1">
              <ul className="flex items-center flex-row flex-wrap lg:space-x-4 justify-center lg:justify-start">
                <li className="text-sm text-white text-opacity-50 w-full lg:w-auto">
                  © {getYear()} Flavor Chef Catering
                </li>
                <div className="flex lg:space-x-4 justify-center lg:justify-start w-full lg:w-auto">
                  <li className="text-sm">
                    <a
                      href="/terms-conditions/"
                      className="font-normal text-white hover:text-white text-opacity-50 hover:text-opacity-100 no-underline"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <div className="text-sm text-white text-opacity-50 mx-1 lg:hidden">
                    |
                  </div>
                  <li className="text-sm">
                    <AniLink
                      fade
                      to="/privacy-policy/"
                      className="font-normal text-white hover:text-white text-opacity-50 hover:text-opacity-100 no-underline"
                    >
                      Privacy Policy
                    </AniLink>
                  </li>
                </div>
                <li className="text-sm">
                  <button
                    className="relative focus:outline-none font-normal text-white hover:text-white text-opacity-50 hover:text-opacity-100 no-underline"
                    onKeyDown={citiesClickHandler}
                    onClick={citiesClickHandler}
                  >
                    <span className="flex items-center justify-between">
                      Cities
                      <i
                        className={`far fa-chevron-down ml-2 transition-all duration-300 ease-linear transform ${
                          cityDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      ></i>
                    </span>
                    <ul
                      className={`bg-white text-left absolute bottom-0 px-4 py-5 flex flex-col space-y-3 transform transition-all duration-300 ease-linear ${
                        cityDropdownOpen
                          ? "opacity-100 -translate-y-10 visible"
                          : "opacity-0 -translate-y-4 invisible"
                      }`}
                    >
                      <li className="whitespace-nowrap border-b border-solid border-gray-100 pb-2.5">
                        <AniLink
                          fade
                          to="/downtown-san-diego-catering/"
                          className="font-display tracking-wider leading-5 no-underline"
                        >
                          Downtown San Diego
                        </AniLink>
                      </li>
                      <li className="whitespace-nowrap border-b border-solid border-gray-100 pb-2.5">
                        <AniLink
                          fade
                          to="/north-county-san-diego-catering/"
                          className="font-display tracking-wider leading-5 no-underline"
                        >
                          San Diego North County
                        </AniLink>
                      </li>
                      <li className="whitespace-nowrap border-b border-solid border-gray-100 pb-2.5">
                        <AniLink
                          fade
                          to="/palm-springs-catering/"
                          className="font-display tracking-wider leading-5 no-underline"
                        >
                          Palm Springs
                        </AniLink>
                      </li>
                      <li className="whitespace-nowrap">
                        <AniLink
                          fade
                          to="/temecula-catering/"
                          className="font-display tracking-wider leading-5 no-underline"
                        >
                          Temecula
                        </AniLink>
                      </li>
                    </ul>
                  </button>
                </li>
                <div className="text-sm text-white text-opacity-50 mx-1 lg:hidden">
                  |
                </div>
                <li className="text-sm text-white text-opacity-50">
                  <div className="flex items-center justify-center">
                    Powered by
                    <a
                      className="group text-white hover:font-normal text-white hover:text-white text-opacity-50 hover:text-opacity-100 font-bold ml-1 no-underline"
                      href="https://www.wisedigitalpartners.com/affordable-web-design/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NEST
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center lg:justify-items-start space-x-3 order-1 lg:order-2 mb-10 lg:mb-0">
              <a
                href="https://www.facebook.com/flavorchefcatering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:text-primary-600 bg-primary-50 bg-opacity-20 hover:bg-opacity-100 no-underline"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/flavorchefcatering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:text-primary-600 bg-primary-50 bg-opacity-20 hover:bg-opacity-100 no-underline"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
