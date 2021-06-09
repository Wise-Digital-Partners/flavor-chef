import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ReviewBadges from "../components/Repeating/ReviewBadges";
import Testimonials from "../components/Repeating/Testimonials";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import Logo from "../images/global/Flavor Chef Icon.png";
import DiamondIcon from "../images/global/diamond.svg";

const Page = ({ data }) => {
  const [refStep1, inViewStep1] = useInView({ threshold: 0.5 }),
    [refStep2, inViewStep2] = useInView({ threshold: 0.5 }),
    [refStep3, inViewStep3] = useInView({ threshold: 0.5 }),
    [refStep4, inViewStep4] = useInView({ threshold: 0.5 }),
    [refStep5, inViewStep5] = useInView({ threshold: 0.5 });

  const animationStep1 = useAnimation(),
    animationDot1 = useAnimation(),
    animationStep2 = useAnimation(),
    animationDot2 = useAnimation(),
    animationStep3 = useAnimation(),
    animationDot3 = useAnimation(),
    animationStep4 = useAnimation(),
    animationDot4 = useAnimation(),
    animationStep5 = useAnimation(),
    animationDot5 = useAnimation();

  useEffect(() => {
    if (inViewStep1) {
      animationStep1.start("visible");
      animationDot1.start("visibleDot");
    }
    if (inViewStep2) {
      animationStep2.start("visible");
      animationDot2.start("visibleDot");
    }
    if (inViewStep3) {
      animationStep3.start("visible");
      animationDot3.start("visibleDot");
    }
    if (inViewStep4) {
      animationStep4.start("visible");
      animationDot4.start("visibleDot");
    }
    if (inViewStep5) {
      animationStep5.start("visible");
      animationDot5.start("visibleDot");
    }
  }, [
    animationStep1,
    animationDot1,
    animationStep2,
    animationDot2,
    animationStep3,
    animationDot3,
    animationStep4,
    animationDot4,
    animationStep5,
    animationDot5,
    inViewStep1,
    inViewStep2,
    inViewStep3,
    inViewStep4,
    inViewStep5,
  ]);

  const variants = {
    visible: {
      opacity: 1,
      x: "0px",
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
    },
    visibleDot: {
      opacity: 1,
      width: "1.75rem",
      height: "1.75rem",
      transition: { duration: 1 },
    },
    hiddenDot: {
      opacity: 0,
      width: "0rem",
      height: "0rem",
    },
    hiddenLeft: {
      opacity: 0,
      x: "-100px",
    },
    hiddenRight: {
      opacity: 0,
      x: "100px",
    },
  };

  return (
    <Layout>
      <SearchEngineOptimization
        title="About Flavor Chef Catering | San Diego Catering"
        description="Choose Flavor Chef Catering in San Diego for a top-notch culinary experience that's a mix of classical French techniques and local ingredients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-white pt-1 md:pt-1 mb-20 md:mb-6">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center md:gap-x-10 lg:gap-x-20">
            <div className="order-2 md:order-1">
              <h1>About Our Chefs</h1>
              <p>
                Our team of talented chefs is driven by stewardship, creativity,
                innovation, commitment, compassion, and accountability. At
                Flavor Chef, we make these core values a part of our everyday
                lives to benefit you, our valued customers. We mix classical
                French techniques with locally sourced ingredients and
                California flair to provide a top-notch culinary experience.
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
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 relative pt-32 pb-32 mb-20 md:mb-32">
        <GatsbyImage
          image={data.wallpaperBackground.childImageSharp.gatsbyImageData}
          alt="Decorative Wallpaper"
          className="absolute top-0 w-full"
        />
        <div className="relative container">
          <header className="text-center mb-8 md:mb-14">
            <h2>Our Core Values</h2>
          </header>

          <div className="relative">
            <img
              src={DiamondIcon}
              alt="Diamond icon"
              width="24"
              className="hidden md:block left-0 right-0 mx-auto z-10 sticky top-56"
            />
            <div className="hidden md:block w-px bg-gray-600 bg-opacity-5 h-full absolute left-0 right-0 mx-auto"></div>
            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center mb-12 md:mb-20">
              {/* <span class="bg-gray-50 h-1/2 w-px absolute left-0 right-0 top-0 m-auto"></span> */}
              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={data.stewardship.childImageSharp.gatsbyImageData}
                  alt="Stewardship"
                />
              </motion.div>

              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenRight"
                variants={variants}
              >
                <h3>Stewardship</h3>
                <p className="mb-0">
                  Stewardship is at the heart of the Flavor Chef philosophy. As
                  a team, we want to have a positive influence on our customers
                  and the world around us.
                </p>
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center mb-12 md:mb-20">
              <motion.div
                className="order-2 md:order-1"
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenLeft"
                variants={variants}
              >
                <h3>Creativity and Innovation</h3>
                <p className="mb-0">
                  Our team of chefs value taking a creative and innovative
                  approach to event coordination and catering. Our goal is to
                  create the best possible experience for you and your guests.
                </p>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenRight"
                variants={variants}
              >
                <GatsbyImage
                  image={
                    data.creativityInnovation.childImageSharp.gatsbyImageData
                  }
                  alt="Creativity and Innovation"
                />
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center mb-12 md:mb-20">
              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={data.commitment.childImageSharp.gatsbyImageData}
                  alt="Commitment"
                />
              </motion.div>
              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenRight"
                variants={variants}
              >
                <h3>Commitment</h3>
                <p className="mb-0">
                  At Flavor Chef, we are committed wholeheartedly to all that we
                  do - both in and out of the workplace. For us, catering is
                  more than a job, it's a lifestyle.
                </p>
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center mb-12 md:mb-20">
              <motion.div
                className="order-2 md:order-1"
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenLeft"
                variants={variants}
              >
                <h3>Compassion</h3>
                <p className="mb-0">
                  Food made with love is always the best kind! We genuinely care
                  for people and that is evident in our wholesome, delicious
                  food. We value the relationships we form with our customers.
                </p>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenRight"
                variants={variants}
              >
                <GatsbyImage
                  image={data.compassion.childImageSharp.gatsbyImageData}
                  alt="Compassion"
                />
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center">
              <motion.div
                ref={refStep5}
                animate={animationStep5}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={data.accountability.childImageSharp.gatsbyImageData}
                  alt="Accountability"
                />
              </motion.div>
              <motion.div
                ref={refStep5}
                animate={animationStep5}
                initial="hiddenRight"
                variants={variants}
              >
                <h3>Accountability</h3>
                <p className="mb-0">
                  At Flavor Chef, we take full accountability for all that we
                  do. We are constantly improving ourselves and our services to
                  ensure our customers receive the best of us.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ReviewBadges className="mb-20 md:mb-32" />
      <AreasWeServe className="mb-20 md:mb-32" headingLevel="h2" />
      <Testimonials className="mb-20 md:mb-32" headingLevel="h2" />

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6 lg:gap-x-10">
            <div className="relative group">
              <div className="overflow-hidden mb-4">
                <GatsbyImage
                  image={data.services.childImageSharp.gatsbyImageData}
                  alt="Services"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="mb-4">Services</h3>
              <p className="mb-0">
                We provide full-service catering for weddings and other events.
                Plus, we offer a mobile food truck.
              </p>
              <a href="/catering-services-san-diego/">
                <span className="absolute top-0 left-0 w-full h-full"></span>
              </a>
            </div>
            <div className="relative group">
              <div className="overflow-hidden mb-4">
                <GatsbyImage
                  image={data.menus.childImageSharp.gatsbyImageData}
                  alt="Services"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="mb-4">Menus</h3>
              <p className="mb-0">
                We offer a variety of menus to suit a wide range of events, big
                or small.
              </p>
              <a href="/menus/">
                <span className="absolute top-0 left-0 w-full h-full"></span>
              </a>
            </div>
            <div className="relative group">
              <div className="overflow-hidden mb-4">
                <GatsbyImage
                  image={data.faqs.childImageSharp.gatsbyImageData}
                  alt="Services"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="mb-4">FAQs</h3>
              <p className="mb-0">
                You have questions and we'd love to help. Find answers to our
                most frequently asked questions.
              </p>
              <a href="/faqs/">
                <span className="absolute top-0 left-0 w-full h-full"></span>
              </a>
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
    heroDesktop: file(relativePath: { eq: "about-us/1.0 About Hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    wallpaperBackground: file(relativePath: { eq: "global/wallpaper-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    stewardship: file(relativePath: { eq: "about-us/2.0 Stewardship.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    creativityInnovation: file(
      relativePath: { eq: "about-us/3.0 Creativity _ Innovation.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    commitment: file(relativePath: { eq: "about-us/4.0 Comitment.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    compassion: file(relativePath: { eq: "about-us/5.0 Compassion.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    accountability: file(
      relativePath: { eq: "about-us/6.0 Accountability.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    services: file(relativePath: { eq: "about-us/services.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menus: file(relativePath: { eq: "about-us/menus.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    faqs: file(relativePath: { eq: "about-us/faqs.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    logo: file(relativePath: { eq: "about-us/faqs.jpg" }) {
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
`;
export default Page;
