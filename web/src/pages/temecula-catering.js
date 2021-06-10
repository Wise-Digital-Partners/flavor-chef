import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ReviewBadges from "../components/Repeating/ReviewBadges";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Temecula Catering | Flavor Chef Catering"
        description="Make your next event unforgettable with Flavor Chef Catering, your full-service Temecula catering company. Enjoy chef-inspired, local ingredient dishes."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-white pt-6 md:pt-10 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-10 md:gap-x-10 lg:gap-x-20">
            <div className="order-2 md:order-1">
              <h1>Temecula Catering</h1>
              <p>
                From the highest quality ingredients to the exceptional service
                we provide, your Temecula event or occasion is in good hands.
                Your guests will be treated to an unforgettable experience!
              </p>
              <ButtonSolid
                as="button"
                modal="modal-contact"
                text="Get in Touch"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.heroDesktop.childImageSharp.gatsbyImageData}
                alt="Temecula Catering"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 relative pt-20 md:pt-32 pb-20 md:pb-32 mb-20 md:mb-32 overflow-hidden">
        <div className="absolute top-0 w-full">
          <GatsbyImage
            image={data.wallpaperBackground.childImageSharp.gatsbyImageData}
            alt="Decorative Wallpaper"
          />
        </div>
        <div className="container relative">
          <header className="max-w-3xl mx-auto text-center mb-12 md:mb-26">
            <h2>San Diego Full-Service Catering Company</h2>
            <p>
              Flavor Chef Catering mixes classical French technique with
              California flair for a top-notch culinary experience. With
              high-quality, locally sourced ingredients, we create innovative,
              flavorful menus with an emphasis on freshness. Make your event
              extraordinary with our Temecula full-service catering company,
              featuring cuisine from top local chefs.
            </p>
          </header>
        </div>
        <div className="relative">
          <ReviewBadges />
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-10 md:gap-y-20 md:gap-x-10 lg:gap-x-20">
            <div className="group relative">
              <div className="overflow-hidden mb-8">
                <GatsbyImage
                  image={data.weddings.childImageSharp.gatsbyImageData}
                  alt="Weddings"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h2>Weddings</h2>
              <p>
                For a special and carefree wedding day, you can trust Flavor
                Chef to create a catering experience your guests will remember.
              </p>
              <ButtonWithIcon
                href="/full-service-wedding-catering/"
                text="Learn More"
              />
              <AniLink fade to="/full-service-wedding-catering/">
                <span className="absolute w-full h-full top-0 left-0"></span>
              </AniLink>
            </div>

            <div className="group relative">
              <div className="md:mt-20">
                <div className="overflow-hidden mb-8">
                  <GatsbyImage
                    image={data.socialEvents.childImageSharp.gatsbyImageData}
                    alt="Social Events"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <h2>Social Events</h2>
                <p>
                  We treat each and every detail with the utmost care, love, and
                  precision to ensure your event is nothing short of perfect. We
                  specialize in on-site catering and always treat your space as
                  if it’s our own.
                </p>
                <ButtonWithIcon
                  href="/social-event-catering/"
                  text="Learn More"
                />
              </div>
              <AniLink fade to="/social-event-catering/">
                <span className="absolute w-full h-full top-0 left-0"></span>
              </AniLink>
            </div>

            <div className="group relative">
              <div className="md:-mt-26">
                <div className="overflow-hidden mb-8">
                  <GatsbyImage
                    image={
                      data.foodTruckCatering.childImageSharp.gatsbyImageData
                    }
                    alt="Food Truck Catering"
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <h2>Food Truck Catering</h2>
                <p>
                  Our Flavor Mobile delivers fresh and tasty eats – with a fun
                  and casual vibe – to your event. Our 'gastrotruck' brings
                  conventional catering to you. Use it to serve up a flavorful
                  infusion at parties, celebrations, or surprise events.
                </p>
                <ButtonWithIcon
                  href="/mobile-food-truck-catering/"
                  text="Learn More"
                />
              </div>
              <AniLink fade to="/mobile-food-truck-catering/">
                <span className="absolute w-full h-full top-0 left-0"></span>
              </AniLink>
            </div>

            <div className="group relative">
              <div className="overflow-hidden mb-8">
                <GatsbyImage
                  image={
                    data.corporateOccasions.childImageSharp.gatsbyImageData
                  }
                  alt="Corporate Occasions"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h2>Corporate Occasions</h2>
              <p>
                Our chefs can create memorable dishes for your corporate
                function. We offer both on-site catering and delivery options,
                such as boxed lunches.
              </p>
              <ButtonWithIcon
                href="/corporate-catering-san-diego/"
                text="Learn More"
              />
              <AniLink fade to="/corporate-catering-san-diego/">
                <span className="absolute w-full h-full top-0 left-0"></span>
              </AniLink>
            </div>
          </div>
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
              <a href="/wedding-catering-menu/">
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
            <div className="relative group">
              <a href="/boxed-lunch-catering-menu/">
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
              <a href="/flavor-mobile-menu/">
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

      <section className="bg-white pt-6 md:pt-10 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-10 md:gap-x-10 lg:gap-x-20">
            <div>
              <GatsbyImage
                image={data.city.childImageSharp.gatsbyImageData}
                alt="Temecula’s Caterer of Choice"
              />
            </div>
            <div>
              <h2>Temecula’s Caterer of Choice</h2>
              <p>
                Temecula, the heart of Southern California’s wine country, is
                the perfect setting for your wedding or special occasion.
                Award-winning wineries, colorful hot air balloons in the sky,
                and picturesque landscapes make this a beautiful place for
                gatherings. At Flavor Chef Catering, we’ve created many
                memorable experiences in Temecula. The possibilities are
                endless, and we love working with clients to help shape their
                vision and make it a reality.
              </p>
              <ButtonSolid
                as="button"
                modal="modal-contact"
                text="Get in Touch"
              />
            </div>
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
    heroDesktop: file(relativePath: { eq: "cities/Temecula/1.0 Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    city: file(
      relativePath: { eq: "cities/Temecula/2.0 City Specific Content.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    wallpaperBackground: file(relativePath: { eq: "global/wallpaper-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    weddings: file(
      relativePath: { eq: "services/Services Hub/1.0 Weddings.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    socialEvents: file(
      relativePath: { eq: "services/Services Hub/2.0 Social Events.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    corporateOccasions: file(
      relativePath: { eq: "services/Services Hub/3.0 Corporate.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    foodTruckCatering: file(
      relativePath: { eq: "services/Services Hub/4.0 Flavor Mobile.jpg" }
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
