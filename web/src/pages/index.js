import React from "react";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { BgImage } from "gbimage-bridge";
// import { motion } from "framer-motion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import ReviewBadges from "../components/Repeating/ReviewBadges";
import Testimonials from "../components/Repeating/Testimonials";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
import ScrollWrapper from "../components/Scroll/ScrollWrapper";
import ScrollNavigation from "../components/Scroll/ScrollNavigation";
import ScrollContent from "../components/Scroll/ScrollContent";

const Page = ({ data }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";

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
        title="San Diego Full-Service Catering Company | Flavor Chef"
        description="Make your next event unforgettable with Flavor Chef Catering, your San Diego full-service catering company. Enjoy chef-inspired, local ingredient dishes!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-40 md:pt-80 pb-18 md:pb-60"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <p className="text-mobile-8xl md:text-8xl font-heading font-bold text-white mb-6 md:mb-7">
          Chef-Inspired. Ingredient-Focused.
        </p>
        <p className="text-lg font-display tracking-widest text-white mb-7 md:mb-8">
          An unforgettable catering experience.
        </p>
        <ButtonSolid as="button" modal="modal-contact" text="Contact Us" />
      </HeroFullWidth>

      <section className="bg-white pt-12 md:pt-32 mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-12 md:mb-26">
            <h1>San Diego Full-Service Catering Company</h1>
            <p>
              Flavor Chef Catering mixes classical French technique with
              California flair for a top-notch culinary experience. With
              high-quality, locally sourced ingredients, we create innovative,
              flavorful menus with an emphasis on freshness. Make your event
              extraordinary with our San Diego full-service catering company,
              featuring cuisine from top local chefs.
            </p>
          </header>
          <ReviewBadges />
        </div>
      </section>

      <section className="bg-gray-50 relative pt-20 md:pt-32 pb-20 md:pb-32 mb-20 md:mb-32">
        <GatsbyImage
          image={data.wallpaperBackground.childImageSharp.gatsbyImageData}
          alt="Decorative Wallpaper"
          className="absolute top-0 w-full"
        />
        <div className="relative container">
          <header className="mb-8 md:mb-26">
            <h2>What We Do Best</h2>
          </header>

          <ScrollWrapper className="grid lg:grid-cols-12 lg:gap-x-14">
            <ScrollNavigation className="hidden lg:block md:col-start-1 md:col-span-3">
              <li>
                <AnchorLink to={url + "#weddings"} title="Weddings" stripHash />
              </li>
              <li>
                <AnchorLink
                  to={url + "#social-events"}
                  title="Social Events"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#corporate"}
                  title="Corporate"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#flavor-mobile"}
                  title="Flavor Mobile"
                  stripHash
                />
              </li>
            </ScrollNavigation>

            <ScrollContent className="md:col-end-13 md:col-span-9">
              <div id="weddings" className="mb-10 md:mb-20">
                <GatsbyImage
                  image={data.weddings.childImageSharp.gatsbyImageData}
                  alt="Weddings"
                  className="mb-7 md:mb-10"
                />
                <div className="grid md:grid-cols-12 md:gap-x-16">
                  <div className="md:col-start-1 md:col-span-4">
                    <h3>Weddings</h3>
                  </div>
                  <div className="md:col-end-13 md:col-span-8">
                    <p>
                      For a special and carefree wedding day, you can trust
                      Flavor Chef to create a catering experience your guests
                      will remember.
                    </p>
                    <ButtonWithIcon
                      href="/full-service-wedding-catering/"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>

              <div id="social-events" className="mb-10 md:mb-20">
                <GatsbyImage
                  image={data.socialEvents.childImageSharp.gatsbyImageData}
                  alt="Social Events"
                  className="mb-7 md:mb-10"
                />
                <div className="grid md:grid-cols-12 md:gap-x-16">
                  <div className="md:col-start-1 md:col-span-4">
                    <h3>Social Events</h3>
                  </div>
                  <div className="md:col-end-13 md:col-span-8">
                    <p>
                      We treat each and every detail with the utmost care, love,
                      and precision to ensure your event is nothing short of
                      perfect. We specialize in on-site catering and always
                      treat your space as if it’s our own.
                    </p>
                    <ButtonWithIcon
                      href="/social-event-catering/"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>

              <div id="corporate" className="mb-10 md:mb-20">
                <GatsbyImage
                  image={
                    data.corporateOccasions.childImageSharp.gatsbyImageData
                  }
                  alt="Corporate Occasions"
                  className="mb-7 md:mb-10"
                />
                <div className="grid md:grid-cols-12 md:gap-x-16">
                  <div className="md:col-start-1 md:col-span-4">
                    <h3>Corporate Occasions</h3>
                  </div>
                  <div className="md:col-end-13 md:col-span-8">
                    <p>
                      Our chefs can create memorable dishes for your corporate
                      function. We offer both on-site catering and delivery
                      options, such as boxed lunches.
                    </p>
                    <ButtonWithIcon
                      href="/corporate-catering-san-diego/"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>

              <div id="flavor-mobile">
                <GatsbyImage
                  image={data.foodTruckCatering.childImageSharp.gatsbyImageData}
                  alt="Food Truck Catering"
                  className="mb-7 md:mb-10"
                />
                <div className="grid md:grid-cols-12 md:gap-x-16">
                  <div className="md:col-start-1 md:col-span-4">
                    <h3>Food Truck Catering</h3>
                  </div>
                  <div className="md:col-end-13 md:col-span-8">
                    <p>
                      Our Flavor Mobile delivers fresh and tasty eats – with a
                      fun and casual vibe – to your event. Our 'gastrotruck'
                      brings conventional catering to you. Use it to serve up a
                      flavorful infusion at parties, celebrations, or surprise
                      events.
                    </p>
                    <ButtonWithIcon
                      href="/mobile-food-truck-catering/"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
            </ScrollContent>
          </ScrollWrapper>
        </div>
      </section>

      <Testimonials className="mb-20 md:mb-32" headingLevel="h2" />

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 md:mb-10 md:flex md:justify-between md:items-center text-center md:text-left">
            <h2 className="mb-0">Our Menu Options</h2>
            <ButtonWithIcon
              href="/menus/"
              text="Learn More"
              className="hidden md:inline-flex"
            />
          </header>
          <div className="grid md:grid-cols-3 gap-y-8 md:gap-2">
            <div className="relative group">
              <a href="# ">
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.menuWeddings.childImageSharp.gatsbyImageData}
                    alt="Menu - Weddings"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <span className="font-display text-white tracking-wider leading-5 absolute bottom-10 right-10 flex items-center justify-center">
                  Weddings
                </span>
              </a>
            </div>
            <div className="relative group">
              <a href="# ">
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
              <a href="# ">
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
              <a href="# ">
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
            <div className="relative group">
              <a href="# ">
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.menuBoxedLunch.childImageSharp.gatsbyImageData}
                    alt="Menu - Boxed Lunch"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <span className="font-display text-white tracking-wider leading-5 absolute bottom-10 right-10 flex items-center justify-center">
                  Boxed Lunch
                </span>
              </a>
            </div>
            <div className="relative group">
              <a href="# ">
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={
                      data.menuFlavorMobile.childImageSharp.gatsbyImageData
                    }
                    alt="Menu - Flavor Mobile"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <span className="font-display text-white tracking-wider leading-5 absolute bottom-10 right-10 flex items-center justify-center">
                  Flavor Mobile
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-3 md:gap-x-12 gap-y-16 text-center">
            <div>
              <img
                src={data.ingredientFocused.publicURL}
                alt="The Freshest Ingredients"
                className="mx-auto mb-5 md:mb-6"
              />
              <h3 className="heading-four">The Freshest Ingredients</h3>
              <p className="mb-0">
                We use only top-quality, locally sourced ingredients – like
                specialty produce, fresh seafood, artisan bread, and premium
                oils.
              </p>
            </div>
            <div>
              <img
                src={data.chefInspired.publicURL}
                alt="Prepared by Chefs"
                className="mx-auto mb-5 md:mb-6"
              />
              <h3 className="heading-four">Prepared by Chefs</h3>
              <p className="mb-0">
                Everyone on our team is a chef, and every dish is prepared with
                culinary expertise.
              </p>
            </div>
            <div>
              <img
                src={data.creativeInnovative.publicURL}
                alt="Innovative Concepts"
                className="mx-auto mb-5 md:mb-6"
              />
              <h3 className="heading-four">Innovative Concepts</h3>
              <p className="mb-0">
                We bring new and creative ideas to catering - from the dishes we
                prepare to the presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AreasWeServe className="mb-20 md:mb-32" headingLevel="h2" />
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
    heroDesktop: file(relativePath: { eq: "home/1.0 Hero Desktop .jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero Mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    wallpaperBackground: file(relativePath: { eq: "global/wallpaper-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    weddings: file(relativePath: { eq: "home/2.0 Weddings.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    socialEvents: file(relativePath: { eq: "home/3.0 Social Events.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    corporateOccasions: file(
      relativePath: { eq: "home/4.0 Corporate Occasions.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    foodTruckCatering: file(
      relativePath: { eq: "home/5.0 Food Truck Catering.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuWeddings: file(
      relativePath: { eq: "home/Menu Images/Wedding Menu.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSummerDinnerParty: file(
      relativePath: { eq: "home/Menu Images/Summer Dinner Party.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSmallBites: file(
      relativePath: { eq: "home/Menu Images/Small Bites.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuSweetTreats: file(
      relativePath: { eq: "home/Menu Images/Sweet Treats.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuBoxedLunch: file(
      relativePath: { eq: "home/Menu Images/Boxed Lunch.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuFlavorMobile: file(
      relativePath: { eq: "home/Menu Images/Flavor Mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    ingredientFocused: file(
      relativePath: { eq: "home/7.0 Ingredient Focused.svg" }
    ) {
      publicURL
    }
    chefInspired: file(relativePath: { eq: "home/8.0 Chef Inspired.svg" }) {
      publicURL
    }
    creativeInnovative: file(
      relativePath: { eq: "home/9.0 Creative _ Innovative.svg" }
    ) {
      publicURL
    }
  }
`;
export default Page;
