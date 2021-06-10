import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import ReviewBadges from "../components/Repeating/ReviewBadges";
import Testimonials from "../components/Repeating/Testimonials";
import SliderGallery from "../components/Slider/SliderGallery";
import Faqs from "../components/Repeating/FAQ";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
// import ButtonWithIcon from "../components/Button/ButtonWithIcon";
import DownloadIcon from "../images/global/Download.svg";
import DiamondIcon from "../images/global/diamond.svg";

const Page = ({ data }) => {
  const heroFullWidthImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Mobile Food Truck Catering | Flavor Chef Catering"
        description="Serve up a staff lunch, add a special touch to your party, or bring mobile food truck catering to your special occasion. The Flavor Mobile adds instant fun."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-72 pb-36 md:pb-52"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <h1 className="text-white mb-0">Mobile Food Truck Catering</h1>
      </HeroFullWidth>

      <section className="bg-white pt-12 md:pt-24 mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-8 md:mb-26">
            <h2>The Flavor Mobile ‘Gastrotruck’</h2>
            <p>
              Serve up a staff lunch, add a special touch to your party, or
              bring a mobile eatery to a special occasion. The Flavor Mobile
              instantly adds a fun, casual vibe.
            </p>
          </header>
        </div>
        <ReviewBadges />
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h2>Choosing Your Menus</h2>
              <p>
                Explore some of our favorite menu options to get an idea of what
                you’d like the Flavor Mobile chefs to make for you.
              </p>
              <div className="flex space-x-6">
                <ButtonSolid href="/flavor-mobile-menu/" text="View Menu" />
                <a href="# " className="flex items-center no-underline">
                  <img
                    src={DownloadIcon}
                    alt="Download icon"
                    className="font-medium mr-2"
                  />{" "}
                  Download Menu
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.menu.childImageSharp.gatsbyImageData}
                alt="Menu"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.eventsWeCater.childImageSharp.gatsbyImageData}
                alt="Have Food. Will Travel"
              />
            </div>
            <div>
              <h2>Have Food. Will Travel</h2>
              <p>
                The Flavor Mobile is always ready to roll. Our gastrotruck
                serves up fresh eats for many types of events. Here are some,
                just to name a few:
              </p>
              <ul className="flex flex-col space-y-3">
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Parties & Celebrations</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Holiday Gatherings</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Special Occasions</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Corporate Functions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        className="mb-20 md:mb-32"
        headingLevel="h2"
        backgroundImage={false}
      />

      <SliderGallery className="mb-20 md:mb-32">
        <div>
          <GatsbyImage image={data.gallery1.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <GatsbyImage image={data.gallery2.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <GatsbyImage image={data.gallery3.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <GatsbyImage image={data.gallery4.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <GatsbyImage image={data.gallery5.childImageSharp.gatsbyImageData} />
        </div>
      </SliderGallery>

      <Faqs className="mb-20 md:mb-32" headingLevel="h2" />

      <CallToAction
        heading="Let’s Start Planning"
        headingLevel="h2"
        subtext="Reach out today to see how you can add a special touch to your next event and create an experience your guests will not soon forget."
      />
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
      relativePath: {
        eq: "services/Flavor Mobile/1.0 Flavor Mobile Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "services/Flavor Mobile/1.0 Flavor Mobile Hero Mobile.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menu: file(relativePath: { eq: "services/Flavor Mobile/2.0 Menu.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    eventsWeCater: file(
      relativePath: { eq: "services/Flavor Mobile/3.0 Events We Cater.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery1: file(
      relativePath: {
        eq: "services/Flavor Mobile/Flavor Mobile Gallery/Gallery-1.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery2: file(
      relativePath: {
        eq: "services/Flavor Mobile/Flavor Mobile Gallery/Gallery-2.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery3: file(
      relativePath: {
        eq: "services/Flavor Mobile/Flavor Mobile Gallery/Gallery-3.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery4: file(
      relativePath: {
        eq: "services/Flavor Mobile/Flavor Mobile Gallery/Gallery-4.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery5: file(
      relativePath: {
        eq: "services/Flavor Mobile/Flavor Mobile Gallery/Gallery-5.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
