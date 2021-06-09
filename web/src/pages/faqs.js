import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";

const Page = ({ data }) => {
  const heroFullWidthImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const questionsAnswers = [
    {
      question: "What’s included in your services?",
      answer:
        "Flavor Chef Catering is a full-service catering company, and we supply everything you'll need for your event. We customize services based on your personal needs and budget.",
    },
    {
      question: "What if my guest count changes?",
      answer:
        "Not a problem! We'll contact you a week before your event for a final guest count, and we can easily slot in extra guests after that if needed. However, please note that you may not decrease the guest count after the final count is given a week ahead of time.",
    },
    {
      question: "Will there be a staff member there to help me?",
      answer:
        "Yes! We offer full service with on-site staff. Or you can select a drop-off service where we deliver your food hot and ready to go.",
    },
    {
      question: "What is your specialty?",
      answer:
        "Our culinary chefs specialize in Traditional French techniques and then add a bit of California flair.",
    },
    {
      question:
        "I have guests with allergies or special diets. Can you accommodate?",
      answer:
        "Absolutely! We specialize in creating diet and allergy-friendly menus, including gluten-free, paleo, nut-free, etc. Just let us know what you're looking for, and we'll plan a menu.",
    },
    {
      question:
        "I see you have a food truck. Is that available for private events?",
      answer:
        "Yes, it is! Contact us, and we'll be happy to send you a Flavor Mobile catering menu.",
    },
    {
      question: "How far in advance do I have to book?",
      answer:
        "To ensure your date is available, we recommend booking your event as quickly as possible. We do, however, understand that sometimes an event might arise with little notice. Give us a call if that's the case. Depending on our calendar, we may be able to slot you in.",
    },
    {
      question: "Can I set up a tasting?",
      answer:
        "We reserve tastings for weddings and large parties but do make exceptions from time to time upon request.",
    },
    {
      question: "Where can I see more of your pictures?",
      answer: (
        <p>
          You'll find photos on{" "}
          <a
            href="https://www.facebook.com/flavorchefcatering/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/flavorchefcatering/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          , and{" "}
          <a
            href="https://www.yelp.com/biz/flavor-chef-catering-vista"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yelp
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="FAQs | Full-Service Catering Company | Flavor Chef"
        description="You have catering questions. We have answers. Read our FAQs to learn more about what we offer at Flavor Chef Catering in San Diego."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-64 pb-36 md:pb-64"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <h1 className="text-white mb-0">FAQs</h1>
      </HeroFullWidth>

      <section className="pt-16 md:pt-20 mb-20 md:mb-32 pb-6">
        <div className="container">
          <header className="mb-6 md:mb-14 text-center md:text-left">
            <h2>Got Questions? Let Us Answer Them For You</h2>
          </header>

          <Accordion allowZeroExpanded={true}>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
              <div>
                {questionsAnswers.slice(0, 5).map((faq, i) => {
                  return (
                    <div key={i}>
                      <AccordionItem
                        className="border-b border-solid border-gray-400 border-opacity-30 pt-6 pb-5"
                        uuid={i}
                      >
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <AccordionItemState>
                            {(state) => {
                              const icon = state.expanded
                                ? "fa-minus"
                                : "fa-plus";
                              return (
                                <i
                                  className={`fal ${icon} text-xl text-primary-400 mr-6`}
                                ></i>
                              );
                            }}
                          </AccordionItemState>

                          <p className="font-heading text-xl font-bold text-gray-600 mb-0">
                            {faq.question}
                          </p>
                        </AccordionItemButton>
                        <AccordionItemPanel className="pt-4 pl-10 animate-fadeIn">
                          <p className="mb-0">{faq.answer}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </div>
                  );
                })}
              </div>
              <div>
                {questionsAnswers.slice(5, 10).map((faq, i) => {
                  return (
                    <div key={i + 5}>
                      <AccordionItem
                        className="border-b border-solid border-gray-400 border-opacity-30 pt-6 pb-5"
                        uuid={i + 5}
                      >
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <AccordionItemState>
                            {(state) => {
                              const icon = state.expanded
                                ? "fa-minus"
                                : "fa-plus";
                              return (
                                <i
                                  className={`fal ${icon} text-xl text-primary-400 mr-6`}
                                ></i>
                              );
                            }}
                          </AccordionItemState>

                          <p className="font-heading text-xl font-bold text-gray-600 mb-0">
                            {faq.question}
                          </p>
                        </AccordionItemButton>
                        <AccordionItemPanel className="pt-4 pl-10 animate-fadeIn">
                          <p className="mb-0">{faq.answer}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </div>
                  );
                })}
                <div className="mt-7">
                  Have more questions? Feel free to{" "}
                  <button data-modal-open="modal-contact">contact us</button>
                </div>
              </div>
            </div>
          </Accordion>
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
    heroDesktop: file(relativePath: { eq: "faqs/1.0 FAQs Hero Desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(relativePath: { eq: "faqs/1.0 FAQ Hero Mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
