import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import CTAFullWidth from "../CTA/CTAFullWidth";

const CTA = ({ heading, headingLevel, subtext }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/CTA/CTA Background.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "repeating/CTA/CTA Background Mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  `);

  const HeadingTag = headingLevel;

  return (
    <>
      <CTAFullWidth
        className="mb-2"
        // backgroundImages={backgroundImages}
        // backgroundSize="cover"
        // backgroundPosition="100% 0"
        // padding="pt-56 sm:pt-8 pb-24 sm:pb-6"
        textAlignment="text-center mx-auto"
        textMaxWidth="max-w-2xl"
      >
        <HeadingTag className="text-mobile-7xl sm:text-7xl">
          {heading || "Bring Flavor To Your Event"}
        </HeadingTag>
        <p className="text-xl">
          {subtext ||
            "Reach out today to discuss your vision and how we can make it a reality!"}
        </p>

        <ButtonSolid as="button" modal="modal-contact" text="Contact Us" />
      </CTAFullWidth>

      <GatsbyImage
        image={data.backgroundDesktop.childImageSharp.gatsbyImageData}
      />
    </>
  );
};

export default CTA;
