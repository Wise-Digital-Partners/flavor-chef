import React from "react";
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
        "20-30 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor purus amet.",
      viewMenu: "/wedding-catering-menu/",
      downloadMenu: data.weddingPDF.publicURL,
    },
    {
      id: "summer-dinner-party",
      image: data.menuSummerDinnerParty.childImageSharp.gatsbyImageData,
      heading: "Summer Dinner Party Menu",
      text:
        "20-30 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor purus amet.",
      viewMenu: "",
      downloadMenu: data.summerDinnerPartyPDF.publicURL,
    },
    {
      id: "small-bites",
      image: data.menuSmallBites.childImageSharp.gatsbyImageData,
      heading: "Small Bites Menu",
      text:
        "20-30 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor purus amet.",
      viewMenu: "",
      downloadMenu: "",
    },
    {
      id: "sweet-treats",
      image: data.menuSweetTreats.childImageSharp.gatsbyImageData,
      heading: "Sweet Treats Menu",
      text:
        "20-30 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor purus amet.",
      viewMenu: "",
      downloadMenu: "",
    },
    {
      id: "boxed-lunch",
      image: data.menuBoxedLunch.childImageSharp.gatsbyImageData,
      heading: "Boxed Lunch Menu",
      text:
        "20-30 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor purus amet.",
      viewMenu: "",
      downloadMenu: data.boxedMealsPDF.publicURL,
    },
    {
      id: "flavor-mobile",
      image: data.menuFlavorMobile.childImageSharp.gatsbyImageData,
      heading: "Flavor Mobile Mneu",
      text:
        "20-30 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor purus amet.",
      viewMenu: "",
      downloadMenu: data.flavorMobilePDF.publicURL,
    },
  ];

  const url = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Menus | Flavor Chef Catering | San Diego Catering"
        description="Impress your guests with fresh dishes from Flavor Chef Catering in San Diego. Our menus are innovative and feature locally sourced ingredients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-64 pb-36 md:pb-64"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <h1 className="text-white mb-0">Menus</h1>
      </HeroFullWidth>

      <section className="bg-white pt-12 md:pt-24">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h2>Intro Heading</h2>
            <p>
              20-30 words Lorem ipsum dolor sit amet, consectetur adipiscing
              elit ut aliquam, purus sit amet luctus venenatis, lectus magna
              fringilla urna, porttitor purus amet.
            </p>
          </header>

          <div className="flex justify-center max-w-4xl mx-auto mb-20">
            <AnchorLink
              to={url + "#weddings"}
              title="Weddings"
              className="font-display tracking-wider leading-5 text-primary-400 hover:bg-primary-50 no-underline py-3 px-6"
              stripHash
            />
            <AnchorLink
              to={url + "#summer-dinner-party"}
              title="Summer Dinner Party"
              className="font-display tracking-wider leading-5 text-primary-400 hover:bg-primary-50 no-underline py-3 px-6"
              stripHash
            />
            <AnchorLink
              to={url + "#small-bites"}
              title="Small Bites"
              className="font-display tracking-wider leading-5 text-primary-400 hover:bg-primary-50 no-underline py-3 px-6"
              stripHash
            />
            <AnchorLink
              to={url + "#sweet-treats"}
              title="Sweet Treats"
              className="font-display tracking-wider leading-5 text-primary-400 hover:bg-primary-50 no-underline py-3 px-6"
              stripHash
            />
            <AnchorLink
              to={url + "#boxed-lunch"}
              title="Boxed Lunch"
              className="font-display tracking-wider leading-5 text-primary-400 hover:bg-primary-50 no-underline py-3 px-6"
              stripHash
            />
            <AnchorLink
              to={url + "#flavor-mobile"}
              title="Flavor Mobile"
              className="font-display tracking-wider leading-5 text-primary-400 hover:bg-primary-50 no-underline py-3 px-6"
              stripHash
            />
          </div>

          {menus.map((menu, i) => {
            return (
              <div id={menu.id} className="group" key={i}>
                <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center mb-20 md:mb-32 md:group-hover:shadow-3xl transition-all duration-300 ease-linear">
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
          <div className="grid grid-cols-3 md:grid-cols-none md:flex flex-wrap md:flex-nowrap justify-between items-center">
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
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage_FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage_TW.jpg" }
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
    menuSummerDinnerParty: file(
      relativePath: { eq: "menus/Menus Hub/3.0 Summer Dinner Party Menu.jpg" }
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
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    catalina: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/Catalina.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    hamilton: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/Hamilton.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    jrOrganics: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/JR Organics.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    praegerBros: file(
      relativePath: { eq: "menus/Menus Hub/Partner Logos/Praeger Bros.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    specialtyProduce: file(
      relativePath: {
        eq: "menus/Menus Hub/Partner Logos/Specialty Produce.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    downloadIcon: file(relativePath: { eq: "global/Download.svg" }) {
      publicURL
    }
    weddingPDF: file(relativePath: { eq: "wedding-menu.pdf" }) {
      publicURL
    }
    summerDinnerPartyPDF: file(
      relativePath: { eq: "summer-dinner-party-menu.pdf" }
    ) {
      publicURL
    }
    boxedMealsPDF: file(relativePath: { eq: "boxed-meals-menu.pdf" }) {
      publicURL
    }
    flavorMobilePDF: file(relativePath: { eq: "flavor-mobile-menu.pdf" }) {
      publicURL
    }
  }
`;

export default Page;
