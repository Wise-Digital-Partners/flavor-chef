import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-prev,
  .slick-next {
    ${tw`h-14 w-14 border border-solid border-primary-50 rounded-full`}
    i {
      ${tw`text-2xl text-primary-400`}
    }
    &:hover {
      ${tw`border-primary-400`}
    }
  }
  .slick-prev {
    ${tw``}
  }
  .slick-next {
    ${tw``}
  }
  .slick-dots {
    ${tw`relative! md:absolute! flex! justify-center space-x-2 mt-6 md:mt-0 md:-bottom-14! z-10`}
    li {
      ${tw`mr-0 flex items-center justify-center`}
      ${tw`h-2.5 w-2.5`}
      &.slick-active {
        &:before {
          ${tw`border-primary-400`}
        }
        button {
          /* ${tw``} */
        }
      }
      &:before {
        content: "";
        ${tw`h-4 w-4 rounded-full border border-transparent absolute transition-colors duration-300 ease-linear`};
      }
    }
    button {
      ${tw`bg-primary-400 h-2.5 w-2.5 m-0`}
    }
  }
`;

const Testimonial = ({ className, headingLevel, backgroundImage }) => {
  const data = useStaticQuery(graphql`
    {
      background: file(
        relativePath: { eq: "repeating/Testimonials/Testimonials BG.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      illustration: file(
        relativePath: { eq: "repeating/Testimonials/Illustration.svg" }
      ) {
        publicURL
      }
      google: file(relativePath: { eq: "repeating/Testimonials/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 82, quality: 100)
        }
      }
    }
  `);

  const testimonials = [
    {
      quote:
        "Other than marrying my husband the second best decision I made was using Flavor Chef. They are so amazing. The food is better than most restaurants and the team is beyond professional. I am doing a event next year for all the guest that couldn't make it due to COVID and I will 10000% use them again.",
      name: "Rachel Brodsky",
      platform: data.google.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "Other than marrying my husband the second best decision I made was using Flavor Chef. They are so amazing. The food is better than most restaurants and the team is beyond professional. I am doing a event next year for all the guest that couldn't make it due to COVID and I will 10000% use them again.",
      name: "Rachel Brodsky",
      platform: data.google.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "Other than marrying my husband the second best decision I made was using Flavor Chef. They are so amazing. The food is better than most restaurants and the team is beyond professional. I am doing a event next year for all the guest that couldn't make it due to COVID and I will 10000% use them again.",
      name: "Rachel Brodsky",
      platform: data.google.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel;

  return (
    <section className={`bg-white ${className}`}>
      <div className="container">
        <StyledSlider className="relative">
          <img
            src={data.illustration.publicURL}
            alt="Illustration"
            className="mx-auto mb-4 md:mb-6"
          />

          <header className="mb-10 md:mb-14 text-center">
            <HeadingTag>What Our Customers Say</HeadingTag>
          </header>
          <Slider>
            {testimonials.map((testimonial, i) => {
              return (
                <div key={i}>
                  <blockquote className="max-w-4xl mx-auto text-center">
                    <q>{testimonial.quote}</q>
                    <footer className="mt-10">
                      <span>
                        <cite className="text-gray-600 font-display tracking-wider not-italic">
                          {testimonial.name}
                        </cite>
                        <GatsbyImage
                          image={testimonial.platform}
                          alt="Google logo"
                          className="mt-4 mx-auto"
                        />
                      </span>
                    </footer>
                  </blockquote>
                </div>
              );
            })}
          </Slider>
        </StyledSlider>
      </div>
      {backgroundImage === false ? null : (
        <GatsbyImage image={data.background.childImageSharp.gatsbyImageData} />
      )}
    </section>
  );
};

export default Testimonial;
