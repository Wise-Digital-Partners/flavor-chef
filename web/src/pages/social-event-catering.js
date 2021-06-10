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
// import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
// import DownloadIcon from "../images/global/Download.svg";
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
        title="Social Event Catering San Diego | Flavor Chef Catering"
        description="Celebrate with Flavor Chef Catering, your premiere social event catering company in San Diego. We treat every detail with the utmost care, love, and precision."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-72 pb-36 md:pb-52"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <h1 className="text-white mb-0">Social Event Catering</h1>
      </HeroFullWidth>

      <section className="bg-white pt-12 md:pt-24 mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-8 md:mb-26">
            <h2>Catering Your Social Event</h2>
            <p>
              Let the Flavor Fam help you celebrate your occasion! We treat
              every detail with the utmost care, love, and precision to ensure
              your event is nothing short of perfection.
            </p>
          </header>
        </div>
        <ReviewBadges />
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-2xl mx-auto text-center mb-8 md:mb-16">
            <h2>Choosing Your Menu</h2>
            <p>
              We cater social events, black-tie, big and small. Explore some of
              our favorite menu options and get an idea of what you’d like to
              serve.
            </p>
          </header>
          <div className="grid lg:grid-cols-3 gap-2">
            <div className="relative group">
              <a href="/dinner-catering-menu/">
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={
                      data.menuSummerDinnerParty.childImageSharp.gatsbyImageData
                    }
                    alt="Menu - Summer Dinner Party"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <span className="font-display text-white tracking-wider leading-5 absolute bottom-10 right-10 flex items-center justify-center">
                  Summer Dinner Party
                </span>
              </a>
            </div>
            <div className="relative group">
              <a href="/appetizer-catering-menu/">
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.menuSmallBites.childImageSharp.gatsbyImageData}
                    alt="Menu - Small Bites"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <span className="font-display text-white tracking-wider leading-5 absolute bottom-10 right-10 flex items-center justify-center">
                  Small Bites
                </span>
              </a>
            </div>
            <div className="relative group">
              <a href="/dessert-catering-menu/">
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.menuSweetTreats.childImageSharp.gatsbyImageData}
                    alt="Menu - Sweet Treats"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <span className="font-display text-white tracking-wider leading-5 absolute bottom-10 right-10 flex items-center justify-center">
                  Sweet Treats
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.eventCoordination.childImageSharp.gatsbyImageData}
                alt="Event Coordination"
              />
            </div>
            <div>
              <h2>Event Coordination</h2>
              <p>
                Let us handle the logistics so you can sit back and enjoy the
                experience. From equipment rentals to bar staff, food catering,
                and more, we’ve got you covered.
              </p>
              <ul className="flex flex-col space-y-3">
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Event staff</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Equipment rental coordination</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Set up and tear down</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Water service</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Bar service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h2>Events We Cater</h2>
              <p>
                We provide full-service catering and coordination for a variety
                of social events:
              </p>
              <ul className="flex flex-col space-y-3 mb-8">
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Birthdays</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Anniversaries</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Family Reunions</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Holiday Parties</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Cocktail Parties</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Housewarming Parties</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Retirement Parties</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Bridal & Baby Showers</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Personal Milestones</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Bar & Bat Mitzvahs</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Quinceañeras</span>
                </li>
              </ul>
              <ButtonWithIcon
                href="/flavor-mobile-menu/"
                text="Browser Offerings"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.eventsWeCater.childImageSharp.gatsbyImageData}
                alt="Events We Cater"
              />
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
        <div>
          <GatsbyImage image={data.gallery6.childImageSharp.gatsbyImageData} />
        </div>
      </SliderGallery>

      <Faqs className="mb-20 md:mb-32" headingLevel="h2" />

      <CallToAction heading="Let’s Start Planning" headingLevel="h2" />
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
      relativePath: { eq: "services/Social Events/1.0 Social Hero Desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: { eq: "services/Social Events/1.0 Social Hero Mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSummerDinnerParty: file(
      relativePath: { eq: "services/Social Events/2.0 Summer Dinner Party.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSmallBites: file(
      relativePath: { eq: "services/Social Events/2.1 Small Bites.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSweetTreats: file(
      relativePath: { eq: "services/Social Events/2.2 Sweet Treats.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    eventCoordination: file(
      relativePath: { eq: "services/Social Events/3.0 Event Coordination.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    eventsWeCater: file(
      relativePath: { eq: "services/Social Events/4.0 Events We Cater.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery1: file(
      relativePath: {
        eq: "services/Social Events/Social Events Gallery/Gallery-1.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery2: file(
      relativePath: {
        eq: "services/Social Events/Social Events Gallery/Gallery-2.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery3: file(
      relativePath: {
        eq: "services/Social Events/Social Events Gallery/Gallery-3.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery4: file(
      relativePath: {
        eq: "services/Social Events/Social Events Gallery/Gallery-4.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery5: file(
      relativePath: {
        eq: "services/Social Events/Social Events Gallery/Gallery-5.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery6: file(
      relativePath: {
        eq: "services/Social Events/Social Events Gallery/Gallery-6.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
