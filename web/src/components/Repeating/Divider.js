import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Divider = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Flavor Chef Icon.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 71
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  `);

  return (
    <section className={`${className || "mb-16 md:mb-20"}`}>
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="bg-gray-400 bg-opacity-30 h-px w-full mr-6"></div>
          <GatsbyImage
            image={data.logo.childImageSharp.gatsbyImageData}
            alt="Flavor Chef Catering logo"
            className="min-w-[71px]"
          />
          <div className="bg-gray-400 bg-opacity-30 h-px w-full ml-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Divider;
