import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const heroFullWidthImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const menus = [
    {
      id: "weddings",
      image: data.menuWedding.childImageSharp.gatsbyImageData,
      heading: "Wedding Menu",
      text:
        "Impress your wedding guests with our unique blend of classical French technique and California flair. Our wedding menu features memorable dishes from our top chefs.",
      viewMenu: "/wedding-catering-menu/",
      downloadMenu: data.weddingPDF.publicURL,
    },
    {
      id: "flavor-mobile",
      image: data.menuFlavorMobile.childImageSharp.gatsbyImageData,
      heading: "Flavor Mobile Mneu",
      text:
        "Our top chefs will come to you! Our Flavor Mobile menu features the same types of high-quality, locally sourced dishes we’re known for.",
      viewMenu: "/flavor-mobile-menu/",
      downloadMenu: data.flavorMobilePDF.publicURL,
    },
    // {
    //   id: "summer-dinner-party",
    //   image: data.menuSummerDinnerParty.childImageSharp.gatsbyImageData,
    //   heading: "Summer Dinner Party Menu",
    //   text:
    //     "Make it a dinner party to remember with great summer eats from Flavor Chef Catering. This menu features lighter fare perfect for summertime evening celebrations.",
    //   viewMenu: "/dinner-catering-menu/",
    //   downloadMenu: data.summerDinnerPartyPDF.publicURL,
    // },
    
    
    
    {
      id: "interactive",
      image: data.menuInteractive.childImageSharp.gatsbyImageData,
      heading: "Interactive Stations Menu",
      text:
        "Thrill your guests with a hands-on experience that allows them to prepare and customize their own dishes. Interactive stations are a great way to add an element of fun to your event, party, or gathering.",
      viewMenu: "/interactive-food-station-menu/",
      downloadMenu: data.interactivePDF.publicURL,
    },
    {
      id: "small-bites",
      image: data.menuSmallBites.childImageSharp.gatsbyImageData,
      heading: "Small Bites Menu",
      text:
        "Don’t forget the appetizers! Your guests will love our menu of delectable small bites. They’re created by our top chefs and feature, as always, locally sourced ingredients.",
      viewMenu: "/appetizer-catering-menu/",
      downloadMenu: data.smallBitesPDF.publicURL,
    },
    // {
    //   id: "boxed-lunch",
    //   image: data.menuBoxedLunch.childImageSharp.gatsbyImageData,
    //   heading: "Corporate Menu",
    //   text:
    //     "When you want to keep it simple, order from our boxed lunch menu. These fresh meals are packaged and ready to go!",
    //   viewMenu: "/boxed-lunch-catering-menu/",
    //   downloadMenu: data.boxedMealsPDF.publicURL,
    // },
    
    {
      id: "seasonal-dinner",
      image: data.menuSeasonal.childImageSharp.gatsbyImageData,
      heading: "Seasonal Dinner Menu",
      text:
        "Enjoy decadent, flavorful cuisine made with the freshest fruits, vegetables and ingredients of the season.",
      viewMenu: "/seasonal-catering-menu/",
      downloadMenu: data.seasonalPDF.publicURL,
    },
    {
      id: "dinner-party",
      image: data.menuHarvestDinnerParty.childImageSharp.gatsbyImageData,
      heading: "Harvest Dinner Party Menu",
      text:
        "Celebrate the bounty of the harvest with farm-to-table catering prepared especially for you and your guests—always seasonal and fresh!",
      viewMenu: "/dinner-catering-menu/",
      downloadMenu: data.harvestDinnerPartyPDF.publicURL,
    },
    {
      id: "sweet-treats",
      image: data.menuSweetTreats.childImageSharp.gatsbyImageData,
      heading: "Sweet Treats Menu",
      text:
        "Serve up scrumptious sweet treats at your next event or celebration. Our menu includes heavenly desserts your guests will rave about.",
      viewMenu: "/dessert-catering-menu/",
      downloadMenu: data.sweetTreatsPDF.publicURL,
    },
    {
      id: "holiday",
      image: data.menuHoliday.childImageSharp.gatsbyImageData,
      heading: "Holiday Menu",
      text:
        "Fill your holiday with delicious memories! Our menus include everything from festive appetizers to traditional entrées and holiday-themed desserts.",
      viewMenu: "/holiday-catering-menu/",
      downloadMenu: data.holidayPDF.publicURL,
    },
    
  ];

  const url = typeof window !== "undefined" ? window.location.pathname : "";

  // Toggle Dropdown
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("h-0");
  const [setOverlay, setOverlayState] = useState("opacity-0 invisible");
  const [setIcon, setIconState] = useState("rotate-0");

  const clickHandler = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active"
        ? "max-h-0 py-0"
        : "py-6 md:py-0 max-h-[400px] md:max-h-0"
    );
    setOverlayState(
      setActive === "active" ? "opacity-0 invisible" : "opacity-100 visible"
    );
    setIconState(setActive === "active" ? "rotate-0" : "rotate-180");
  };

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Menus | Flavor Chef Catering | San Diego Catering"
        description="Impress your guests with fresh dishes from Flavor Chef Catering in San Diego. Our menus are innovative and feature locally sourced ingredients."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-64 pb-36 md:pb-64"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <h1 className="text-white mb-0">Menus</h1>
      </HeroFullWidth>

      <section className="pt-12 md:pt-20 mb-14">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center">
            <h2>Flavor Chef Menus</h2>
            <p>
              Our menus feature chef-inspired dishes made with locally sourced
              ingredients. Whether you’re planning a wedding, throwing a bash,
              or want to make a celebration special, we have the menu to match.
            </p>
          </header>
        </div>
      </section>

      <div className="relative">
        <div
          className={`bg-black bg-opacity-50 h-full w-full absolute transition-all duration-300 ease-linear z-10 lg:hidden ${setOverlay}`}
        ></div>
        <div
          className="bg-primary-900 lg:bg-transparent flex justify-between text-white py-3 lg:py-0 px-4 lg:px-0 mb-16 lg:mb-28 sticky lg:relative top-[61px] lg:top-0 cursor-pointer lg:cursor-auto z-20"
          role="button"
          tabIndex={0}
          onKeyDown={clickHandler}
          onClick={clickHandler}
        >
          <div className="lg:hidden flex flex-1 items-center">
            <img
              src={data.menuIcon.publicURL}
              alt="Burger menu icon"
              className="mr-3"
            />
            <span className="font-display text-lg lg:text-base tracking-wider leading-5">
              Menu Options
            </span>
          </div>
          <div className="lg:hidden">
            <i
              className={`far fa-chevron-down transition-all duration-300 ease-linear transform ${setIcon}`}
            ></i>
          </div>

          <nav className="flex justify-center mx-auto absolute lg:relative bg-white lg:bg-transparent top-0 left-0 transform translate-y-12 lg:translate-y-0 w-full lg:w-auto">
            <ul
              className={`px-14 lg:px-0 flex flex-col lg:flex-row space-y-4 lg:space-y-0 w-full lg:w-auto overflow-y-scroll lg:overflow-visible transition-all duration-300 ease-linear ${setHeight}`}
            >
              <li>
                <AnchorLink
                  to={url + "#weddings"}
                  title="Weddings"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#flavor-mobile"}
                  title="Flavor Mobile"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#interactive"}
                  title="Interactive Stations"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#small-bites"}
                  title="Small Bites"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#seasonal"}
                  title="Seasonal Dinner"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#dinner-party"}
                  title="Harvest Dinner Party"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              
              <li>
                <AnchorLink
                  to={url + "#sweet-treats"}
                  title="Sweet Treats"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              {/* <li>
                <AnchorLink
                  to={url + "#boxed-lunch"}
                  title="Corporate"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li> */}
              
              <li>
                <AnchorLink
                  to={url + "#holiday"}
                  title="Holiday"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              
            </ul>
          </nav>
        </div>

        <section>
          <div className="container">
            {menus.map((menu, i) => {
              return (
                <div id={menu.id} className="group" key={i}>
                  <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center mb-20 md:mb-28 transition-all duration-300 ease-linear">
                    <div>
                      <GatsbyImage image={menu.image} alt={menu.heading} />
                    </div>
                    <div>
                      <h3>{menu.heading}</h3>
                      <p>{menu.text}</p>
                      <div className="flex space-x-6">
                        <ButtonSolid href={menu.viewMenu} text="View Menu" />
                        <a
                          href={menu.downloadMenu}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center no-underline"
                        >
                          <img
                            src={data.downloadIcon.publicURL}
                            alt="Download icon"
                            className="font-medium mr-2"
                          />{" "}
                          Download Menu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white mb-20 md:mb-32">
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-6 justify-between items-center">
              <GatsbyImage
                image={data.catalina.childImageSharp.gatsbyImageData}
              />
              <GatsbyImage
                image={data.bakerOlive.childImageSharp.gatsbyImageData}
              />
              <GatsbyImage
                image={data.specialtyProduce.childImageSharp.gatsbyImageData}
              />
              <GatsbyImage
                image={data.hamilton.childImageSharp.gatsbyImageData}
              />
              <GatsbyImage
                image={data.praegerBros.childImageSharp.gatsbyImageData}
              />
              <GatsbyImage
                image={data.jrOrganics.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </section>

        <CallToAction headingLevel="h2" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Menus.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Menus.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "menus/Menus Hub/1.0 Menus Hero Desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: { eq: "menus/Menus Hub/1.0 Menus Hero Mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuWedding: file(
      relativePath: { eq: "menus/Menus Hub/2.0 Wedding Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuInteractive: file(
      relativePath: { eq: "menus/Menus Hub/Interactive station - hub.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSummerDinnerParty: file(
      relativePath: { eq: "menus/Menus Hub/3.0 Summer Dinner Party Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuHarvestDinnerParty: file(
      relativePath: { eq: "menus/Menus Hub/Harvest.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuHoliday: file(
      relativePath: { eq: "menus/Menus Hub/Holiday-Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSeasonal: file(
      relativePath: { eq: "menus/Menus Hub/Seasonal Dinner Party Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSmallBites: file(
      relativePath: { eq: "menus/Menus Hub/4.0 Small Bites Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSweetTreats: file(
      relativePath: { eq: "menus/Menus Hub/5.0 Sweet Treats Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuFlavorMobile: file(
      relativePath: { eq: "menus/Menus Hub/6.0 Flavor Mobile Mneu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuBoxedLunch: file(
      relativePath: { eq: "menus/Menus Hub/Boxed Lunch Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    bakerOlive: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/Baker _ Olive.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    catalina: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/Catalina.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    hamilton: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/Hamilton.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    jrOrganics: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/JR Organics.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    praegerBros: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/Praeger Bros.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    specialtyProduce: file(
      relativePath: {
        eq: "menus/Menus Hub/Partner Logos/Specialty Produce.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    downloadIcon: file(relativePath: { eq: "global/Download.svg" }) {
      publicURL
    }
    weddingPDF: file(relativePath: { eq: "FCC Wedding 2023.pdf" }) {
      publicURL
    }
    summerDinnerPartyPDF: file(
      relativePath: { eq: "FCC Summer 2023 .pdf" }
    ) {
      publicURL
    }
    harvestDinnerPartyPDF: file(
      relativePath: { eq: "harvest-dinner-party-menu.pdf" }
    ) {
      publicURL
    }
    
    interactivePDF: file(relativePath: { eq: "FC_InteractiveStations_2023_v4.pdf" }) {
      publicURL
    }
    boxedMealsPDF: file(relativePath: { eq: "corporate-menu.pdf" }) {
      publicURL
    }
    flavorMobilePDF: file(relativePath: { eq: "FC_FlavorMobileMenu2023_v1.pdf" }) {
      publicURL
    }
    sweetTreatsPDF: file(relativePath: { eq: "FCC Sweet Treats 2023.pdf" }) {
      publicURL
    }
    smallBitesPDF: file(relativePath: { eq: "FC_SmallBitesMenu_2023_v2.pdf" }) {
      publicURL
    }
    holidayPDF: file(relativePath: { eq: "holiday-menu.pdf" }) {
      publicURL
    }
    seasonalPDF: file(relativePath: { eq: "seasonal-dinner-menu.pdf" }) {
      publicURL
    }
    menuIcon: file(relativePath: { eq: "global/menu.svg" }) {
      publicURL
    }
  }
`;

export default Page;
