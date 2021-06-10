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
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
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
        title="Corporate Catering San Diego | Flavor Chef Catering"
        description="Contact us, tell us your plan, and check the catering off your to-do list. Choose Flavor Chef Catering in San Diego for your next corporate catering event."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-72 pb-36 md:pb-52"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <h1 className="text-white mb-0">San Diego Corporate Catering</h1>
      </HeroFullWidth>

      <section className="bg-white pt-12 md:pt-24 mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-8 md:mb-26">
            <h2>Catering Your Function</h2>
            <p>
              We’ve worked with many types of clientele and offer a wide variety
              of catering options for your corporate event. Let our experienced
              team handle all the details for you!
            </p>
          </header>
        </div>
        <ReviewBadges />
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h2>Choosing Your Menu</h2>
              <p>
                Whether you're throwing an event to show appreciation for your
                employees, holding a grand opening, or planning a black tie
                affair like an awards gala, we have menus for every occasion.
              </p>
              <div className="flex space-x-6">
                <ButtonSolid
                  href="/boxed-lunch-catering-menu/"
                  text="View Menu"
                />
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
                of corporate events.
              </p>
              <ul className="flex flex-col space-y-3 mb-8">
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Customer or Employee Appreciation</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Company Milestones</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Team Building</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Seminars, Conferences, Workshops</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Year-End Celebrations</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Networking Events</span>
                </li>
                <li className="flex items-center">
                  <img src={DiamondIcon} alt="Diamond icon" className="mr-2" />
                  <span>Board Meetings & Shareholder Meetings</span>
                </li>
              </ul>
              <ButtonWithIcon href="# " text="Browser Offerings" />
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
      </SliderGallery>

      <Faqs className="mb-20 md:mb-32" headingLevel="h2" />

      <CallToAction
        heading="Let’s Start Planning"
        headingLevel="h2"
        subtext="Reach out today and we’ll help you organize your next corporate event. We also offer delivery services."
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
        eq: "services/Corporate Events/1.0 Corporate Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "services/Corporate Events/1.0 Corporate Hero Mobile.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menu: file(relativePath: { eq: "services/Corporate Events/2.0 Menu.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    eventCoordination: file(
      relativePath: {
        eq: "services/Corporate Events/3.0 Event Coordination.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    eventsWeCater: file(
      relativePath: { eq: "services/Corporate Events/4.0 Events We Cater.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery1: file(
      relativePath: {
        eq: "services/Corporate Events/Corporate Gallery/Gallery-1.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery2: file(
      relativePath: {
        eq: "services/Corporate Events/Corporate Gallery/Gallery-2.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery3: file(
      relativePath: {
        eq: "services/Corporate Events/Corporate Gallery/Gallery-3.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery4: file(
      relativePath: {
        eq: "services/Corporate Events/Corporate Gallery/Gallery-4.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    gallery5: file(
      relativePath: {
        eq: "services/Corporate Events/Corporate Gallery/Gallery-5.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
