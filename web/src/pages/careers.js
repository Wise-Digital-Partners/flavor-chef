import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Catering Careers | San Diego | Flavor Chef Catering"
        description="Flavor Chef Catering supports those with a passion for catering careers. If you thrive on creativity and innovation, the Flavor Fam wants to hear from you."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-white pt-10 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-16 max-w-3xl mx-auto text-center">
            <h1>Careers at Flavor Chef Catering</h1>
            <p>
              Are you interested in becoming a Flavor Fam team member? If you
              thrive on creativity and innovation and bring heart to everything
              you do, we want to hear from you!
            </p>
          </header>

          <GatsbyImage
            image={data.careers.childImageSharp.gatsbyImageData}
            alt="Careers at Flavor Chef Catering"
            className="mb-8"
          />
        </div>
      </section>

      <section className="bg-white mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-16 max-w-xl mx-auto text-center">
            <h2 className="text-mobile-7xl md:text-7xl">Join Our Team</h2>
            <p>
              We’re always looking for skilled and passionate individuals to
              join the Flavor Fam! Please send resumes to{" "}
              <a href="mailto:flavorchefcatering@gmail.com">
                flavorchefcatering@gmail.com
              </a>
            </p>
          </header>
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
    careers: file(relativePath: { eq: "careers/1.0 Careers.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
