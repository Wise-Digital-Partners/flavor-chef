import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const WhyUs = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      facebook: file(
        relativePath: { eq: "repeating/Review Badges/Facebook.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 194
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      yelp: file(relativePath: { eq: "repeating/Review Badges/Yelp.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 194
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      theKnot: file(
        relativePath: { eq: "repeating/Review Badges/The Knot.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 194
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      google: file(relativePath: { eq: "repeating/Review Badges/Google.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 194
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      weddingWire: file(
        relativePath: { eq: "repeating/Review Badges/Wedding Wire.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 194
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      stars: file(relativePath: { eq: "repeating/Review Badges/Stars.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <section className={`${className || ""}`}>
      <div className="container">
        <div className="grid grid-cols-5 justify-between text-center">
          <div className="border-r border-gray-400 border-opacity-40">
            <div className="font-heading text-7xl leading-8 font-bold text-gray-600 text-opacity-60 mb-7">
              5.0
            </div>
            <img
              src={data.stars.publicURL}
              alt="5 Stars"
              className="mx-auto mb-5"
            />
            <GatsbyImage
              image={data.facebook.childImageSharp.gatsbyImageData}
              alt="Facebook logo"
              className="mx-auto"
            />
          </div>

          <div className="border-r border-gray-400 border-opacity-40">
            <div className="font-heading text-7xl leading-8 font-bold text-gray-600 text-opacity-60 mb-7">
              5.0
            </div>
            <img
              src={data.stars.publicURL}
              alt="5 Stars"
              className="mx-auto mb-5"
            />
            <GatsbyImage
              image={data.yelp.childImageSharp.gatsbyImageData}
              alt="Yelp logo"
              className="mx-auto"
            />
          </div>

          <div className="border-r border-gray-400 border-opacity-40">
            <div className="font-heading text-7xl leading-8 font-bold text-gray-600 text-opacity-60 mb-7">
              5.0
            </div>
            <img
              src={data.stars.publicURL}
              alt="5 Stars"
              className="mx-auto mb-5"
            />
            <GatsbyImage
              image={data.theKnot.childImageSharp.gatsbyImageData}
              alt="The Knot logo"
              className="mx-auto"
            />
          </div>

          <div className="border-r border-gray-400 border-opacity-40">
            <div className="font-heading text-7xl leading-8 font-bold text-gray-600 text-opacity-60 mb-7">
              4.9
            </div>
            <img
              src={data.stars.publicURL}
              alt="5 Stars"
              className="mx-auto mb-5"
            />
            <GatsbyImage
              image={data.google.childImageSharp.gatsbyImageData}
              alt="Google logo"
              className="mx-auto"
            />
          </div>

          <div>
            <div className="font-heading text-7xl leading-8 font-bold text-gray-600 text-opacity-60 mb-7">
              5.0
            </div>
            <img
              src={data.stars.publicURL}
              alt="5 Stars"
              className="mx-auto mb-5"
            />
            <GatsbyImage
              image={data.weddingWire.childImageSharp.gatsbyImageData}
              alt="Wedding Wire logo"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
