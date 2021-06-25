import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const WhyUs = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      wallpaperBackground: file(
        relativePath: { eq: "global/wallpaper-bg.jpg" }
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
        "Our chefs specialize in Traditional French techniques and then add a bit of California flair.",
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

  const HeadingTag = headingLevel;

  return (
    <section
      className={`relative overflow-hidden bg-gray-50 py-20 md:py-32 ${
        className || ""
      }`}
    >
      <div className="absolute top-0 w-full">
        <GatsbyImage
          image={data.wallpaperBackground.childImageSharp.gatsbyImageData}
          alt="Decorative Wallpaper"
        />
      </div>
      <div className="container relative">
        <header className="mb-6 md:mb-16 text-center md:text-left">
          <HeadingTag>Catering FAQs</HeadingTag>
        </header>

        <Accordion allowZeroExpanded={true}>
          <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              {" "}
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

                        <p className="font-heading text-lg font-bold text-gray-600 mb-0">
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

                        <p className="font-heading text-lg font-bold text-gray-600 mb-0">
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
  );
};

export default WhyUs;
