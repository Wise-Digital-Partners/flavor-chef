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
      <footer className="bg-primary-900 pt-14 md:pt-22 pb-6">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between space-y-14 md:space-y-0 mb-6 md:mb-28">
            <div className="md:col-start-1 md:col-span-4">
              <AniLink fade to="/">
                <img
                  src={data.logo.publicURL}
                  alt="Flavor Chef Logo"
                  width="258"
                  className="mb-8 md:mb-0 mx-auto md:mx-0"
                />
              </AniLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-40"></div>

        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between items-center pt-4">
            <div className="md:flex md:items-center order-2 md:order-1">
              <ul className="flex items-center flex-row flex-wrap space-x-2 md:space-x-4 justify-center md:justify-start">
                <li className="text-sm text-white text-opacity-50">
                  © {getYear()} Flavor Chef Catering
                </li>
                <li className="text-sm">
                  <a
                    href="/terms-conditions/"
                    className="text-white hover:text-white text-opacity-50 hover:text-opacity-100 no-underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="text-sm">
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="text-white hover:text-white text-opacity-50 hover:text-opacity-100 no-underline"
                  >
                    Privacy Policy
                  </AniLink>
                </li>
                <li className="text-sm mb-3 md:mb-0 md:mr-6">
                  <button
                    className="relative focus:outline-none text-white hover:text-white text-opacity-50 hover:text-opacity-100 no-underline"
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
                <li className="text-sm text-white text-opacity-50">
                  <div className="flex items-center justify-center">
                    Powered by
                    <a
                      className="group text-white hover:text-white hover:text-white text-opacity-50 hover:text-opacity-100 font-bold ml-1 no-underline"
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

            <div className="flex justify-center md:justify-items-start space-x-3 order-1 md:order-2 mb-36 md:mb-0">
              <a
                href="https://www.facebook.com/flavorchefcatering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full text-primary-600 md:text-white hover:text-primary-600 bg-primary-50 md:bg-opacity-20 hover:bg-opacity-100 no-underline"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/flavorchefcatering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full text-primary-600 md:text-white hover:text-primary-600 bg-primary-50 md:bg-opacity-20 hover:bg-opacity-100 no-underline"
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
