import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import { BgImage } from "gbimage-bridge";
// import { motion } from "framer-motion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Catering Services San Diego | Flavor Chef Catering"
        description="Relax. We'll take care of the details. Contact Flavor Chef Catering in San Diego for full event coordination and catering services - all under one roof."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-white relative pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-18 max-w-3xl">
            <h1>Our San Diego Catering Services</h1>
            <p>
              We offer full event coordination and catering under one roof. We
              guarantee you will have a flawless wedding, social/corporate
              event, or ‘gastrotruck’ experience.
            </p>
          </header>
          <div className="grid lg:grid-cols-2 gap-y-10 md:gap-y-20 md:gap-x-10 lg:gap-x-20">
            <div>
              <GatsbyImage
                image={data.weddings.childImageSharp.gatsbyImageData}
                alt="Weddings"
                className="mb-8"
              />
              <h2>Weddings</h2>
              <p>
                For a special and carefree wedding day, you can trust Flavor
                Chef to create a catering experience your guests will remember.
              </p>
              <ButtonWithIcon
                href="/full-service-wedding-catering/"
                text="Learn More"
              />
            </div>

            <div>
              <div className="md:mt-20">
                <GatsbyImage
                  image={data.socialEvents.childImageSharp.gatsbyImageData}
                  alt="Social Events"
                  className="mb-8"
                />
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
            </div>

            <div>
              <div className="md:-mt-26">
                <GatsbyImage
                  image={data.foodTruckCatering.childImageSharp.gatsbyImageData}
                  alt="Food Truck Catering"
                  className="mb-8"
                />
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
            </div>

            <div>
              <GatsbyImage
                image={data.corporateOccasions.childImageSharp.gatsbyImageData}
                alt="Corporate Occasions"
                className="mb-8"
              />
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
            </div>
          </div>
        </div>
      </section>
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
  }
`;
export default Page;
