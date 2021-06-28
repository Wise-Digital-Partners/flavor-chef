import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Header from "../Header/Header";

const WhyUs = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      downtownSanDiego: file(
        relativePath: { eq: "repeating/Areas We Serve/SD Downtown.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 595
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      sanDiegoNorthCounty: file(
        relativePath: { eq: "repeating/Areas We Serve/SD North.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 595
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      palmSprings: file(
        relativePath: { eq: "repeating/Areas We Serve/Palm Springs.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 595
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      temecula: file(
        relativePath: { eq: "repeating/Areas We Serve/Temecula.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 595
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  `);

  return (
    <section className={`${className || ""}`}>
      <div className="container">
        <Header
          headingLevel={headingLevel}
          heading="Areas We Serve"
          subtext="We provide full-service catering for the wider San Diego area, including downtown, north, and central, and Palm Springs, Temecula, Murrieta, and Riverside."
          subtextSize=""
          textAlignment="text-center mx-auto"
          textMaxWidth="max-w-3xl"
          textMargin="mb-12 md:mb-16"
        />
        <div className="grid md:grid-cols-2 gap-y-4 md:gap-2">
          <div className="relative group">
            <a href="/downtown-san-diego-catering/">
              <div className="overflow-hidden">
                <GatsbyImage
                  image={data.downtownSanDiego.childImageSharp.gatsbyImageData}
                  alt="Downtown San Diego"
                  className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <span className="font-display text-white tracking-wider leading-5 absolute inset-0 flex items-center justify-center">
                Downtown San Diego
              </span>
            </a>
          </div>
          <div className="relative group">
            <a href="/palm-springs-catering/">
              <div className="overflow-hidden">
                <GatsbyImage
                  image={data.palmSprings.childImageSharp.gatsbyImageData}
                  alt="Palm Springs"
                  className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <span className="font-display text-white tracking-wider leading-5 absolute inset-0 flex items-center justify-center">
                Palm Springs
              </span>
            </a>
          </div>
          <div className="relative group">
            <a href="/north-county-san-diego-catering/">
              <div className="overflow-hidden">
                <GatsbyImage
                  image={
                    data.sanDiegoNorthCounty.childImageSharp.gatsbyImageData
                  }
                  alt="San Diego North County"
                  className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <span className="font-display text-white tracking-wider leading-5 absolute inset-0 flex items-center justify-center">
                San Diego North County
              </span>
            </a>
          </div>
          <div className="relative group">
            <a href="/temecula-catering/">
              <div className="overflow-hidden">
                <GatsbyImage
                  image={data.temecula.childImageSharp.gatsbyImageData}
                  alt="Temecula"
                  className="w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <span className="font-display text-white tracking-wider leading-5 absolute inset-0 flex items-center justify-center">
                Temecula
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
