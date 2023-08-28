import React, { useState } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import Divider from "../components/Repeating/Divider";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  const heroFullWidthImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const burgerPackage = [
    {
      name: "Flavor Burger",
      description:
        "7 oz patty, American cheese, arugula, caramelized onions, garlic mayo, tomato, brioche bun, house pickles, shoestring fries",
    },
    {
      name: "Veggie Flavor Burger",
      description:
        "veggie burger patty, American cheese, arugula, caramelized onions, garlic mayo, tomato, brioche bun, house pickles, shoestring fries",
    },
  ];

  const bbq = [
    {
      name: "BBQ Brisket Sandwich",
      description:
        "smoked brisket, sweet and spicy BBQ, honey-ginger slaw, brioche bun, shoestring fries",
    },
    {
      name: "BBQ Pork Sandwich",
      description:
        "braised pork, sweet and spicy BBQ, honey-ginger slaw, brioche bun, shoestring fries",
    },
    {
      name: "BBQ Braised Jackfruit Sandwich",
      description:
        "braised jackfruit, sweet and spicy BBQ, honey-ginger slaw, brioche bun, shoestring fries",
    },
  ];

 

  const birria = [
   
    {
      name: "Beef Birria Taco",
      description:
        "shredded beef, jack cheese, onion & cilantro, corn tortilla, consommé, black beans, Mexican rice",
    },
    {
      name: "Jackfruit Birria Taco",
      description:
        "shredded jackfruit, jack cheese, onion & cilantro, corn torti- lla, consommé, black beans, Mexican rice",
    },
  ];

  const riceBowl = [
    {
      name: "Beef Bulgogi Bowl",
      description:
        "bulgogi beef, kimchi, fresh orange, sesame seeds, green onion, steamed jasmine rice",
    },
    {
      name: "Chicken Teriyaki Bowl",
      description:
        "chicken teriyaki, kimchi, fresh orange, sesame seeds, green onion, steamed jasmine rice",
    },
    {
      name: "Veggie Stir Fry Bowl",
      description:
        "seasonal veggie stir fry, kimchi, fresh orange, sesame seeds, green onion, steamed jasmine rice",
    },
  ];

  const caliFresh = [
    {
      name: "Wild Isle Salmon Plate",
      description:
        "seared salmon, sweet mashed potatoes, citrus slaw",
    },
    {
      name: "Grilled Flank Steak Plate",
      description:
        "seared flank steak, chimichurri, sweet mashed potatoes, citrus slaw",
    },
    {
      name: "Citrus Chicken Plate",
      description:
        "seared chicken breast, citrus glaze, sweet mashed potatoes, citrus slaw",
    },
  ];

  const chickenSandwich = [
    {
      name: "Buffalo Blue Chicken Sandwich",
      description:
        "buffalo tossed crispy fried chicken, house made blue cheese, organic greens, tomato, brioche bun, house pickles, shoe- string fries",
    },
    {
      name: "Crispy Chicken Sandwich",
      description:
        "crispy fried chicken, mayonnaise, organic greens, tomato, brioche bun, house pickles, shoestring frie",
    },
  
  ];

  // const apps = [
  //   {
  //     name: "Deep Fried Artichoke Hearts",
  //     description:
  //       "beer battered artichoke hearts, house made buttermilk ranch",
  //   },
  //   {
  //     name: "Crispy Coconut shrimp",
  //     description: "fried coconut shrimp, house sweet chili sauce",
  //   },
  //   {
  //     name: "Sweet Potato black bean empanadas",
  //     description:
  //       "sweet potato, chipotle black bean, jack cheese, smoked jalapeno relish",
  //   },
  //   {
  //     name: "Mozzarella sticks",
  //     description: "fried mozzarella sticks, house made marinara ",
  //   },
  //   {
  //     name: "Mini Loaded Fries",
  //     description:
  //       "fresh fries, house queso, ground beef, jalapeno, green onion, crema",
  //   },
  //   {
  //     name: "Thai Chili Wings",
  //     description:
  //       "freshly fried wings, house sweet chili sauce, green onion, ",
  //   },
  // ];

  const hawaiian = [
    {
      name: "Kahlua Pork Slider Plate",
      description:
        "Kahlua pulled pork, KBBQ sauce, Hawaiian sweet rolls, steamed jasmine rice, spam macaroni salad",
    },
    {
      name: "KBBQ Short Rib Plate",
      description: "bone in beef short ribs, KBBQ sauce, steamed jasmine rice, spam macaroni salad",
    },
  ];

  const kids = [
    {
      name: "Cheese Quesadilla",
      description: "jack cheese, flour tortilla, fresh fries & ketchup",
    },
    {
      name: "Jr. Flavor Burger",
      description:
        "all beef patty, American cheese, brioche bun, fresh fries & ketchup",
    },
    {
      name: "Chicken Tenders",
      description: "fried chicken tenders, fresh fries & ketchup",
    },
  ];

  const url = typeof window !== "undefined" ? window.location.pathname : "";

  // Toggle Dropdown
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("h-0");
  const [setOverlay, setOverlayState] = useState("opacity-0 invisible");
  const [setIcon, setIconState] = useState("rotate-0");

  const clickHandler = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active"
        ? "max-h-0 py-0"
        : "py-6 md:py-0 max-h-[400px] md:max-h-0"
    );
    setOverlayState(
      setActive === "active" ? "opacity-0 invisible" : "opacity-100 visible"
    );
    setIconState(setActive === "active" ? "rotate-0" : "rotate-180");
  };

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Flavor Mobile Menu | Food Truck Catering | Flavor Chef"
        description="Let us come to you. Hire the Flavor Chef Catering 'Flavor Mobile' for your next event. Our mobile food truck catering brings fresh dishes straight to you."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-64 pb-36 md:pb-64"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <div className="text-white font-display text-xl tracking-wider leading-5 mb-4">
          Menu
        </div>
        <h1 className="text-white mb-0">Flavor Mobile</h1>
      </HeroFullWidth>

      <div className="relative">
        <div
          className={`bg-black bg-opacity-50 h-full w-full absolute transition-all duration-300 ease-linear z-10 lg:hidden ${setOverlay}`}
        ></div>
        <div
          className="bg-primary-900 lg:bg-transparent flex justify-between text-white py-3 lg:py-0 px-4 lg:px-0 lg:mt-16 mb-16 lg:mb-22 sticky lg:relative top-[61px] lg:top-0 cursor-pointer lg:cursor-auto z-20"
          role="button"
          tabIndex={0}
          onKeyDown={clickHandler}
          onClick={clickHandler}
        >
          <div className="lg:hidden flex flex-1 items-center">
            <img
              src={data.menuIcon.publicURL}
              alt="Burger menu icon"
              className="mr-3"
            />
            <span className="font-display text-lg lg:text-base tracking-wider leading-5">
              Menu Options
            </span>
          </div>
          <div className="lg:hidden">
            <i
              className={`far fa-chevron-down transition-all duration-300 ease-linear transform ${setIcon}`}
            ></i>
          </div>

          <nav className="flex justify-center mx-auto absolute lg:relative bg-white lg:bg-transparent top-0 left-0 transform translate-y-12 lg:translate-y-0 w-full lg:w-auto">
            <ul
              className={`px-14 lg:px-0 flex flex-col lg:flex-row md:items-center space-y-4 lg:space-y-0 w-full lg:w-auto overflow-y-scroll lg:overflow-visible transition-all duration-300 ease-linear ${setHeight}`}
            >
              {/* <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#apps"}
                  title="Appetizers"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
                {/* <img
                  src={data.addOnIcon.publicURL}
                  alt="Add-on icon"
                  className="-mt-1 ml-1 lg:ml-0 lg:right-7 md:absolute"
                /> */}
              {/* </li> */}
              <li>
                <AnchorLink
                  to={url + "#burger"}
                  title="Burger"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              
              <li>
                <AnchorLink
                  to={url + "#chicken-sandwich"}
                  title="Chicken Sandwich"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#bbq"}
                  title="BBQ"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#rice-bowls"}
                  title="Rice Bowls"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#birria"}
                  title="Birria"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#hawaiian"}
                  title="Hawaiian"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
                {/* <img
                  src={data.addOnIcon.publicURL}
                  alt="Add-on icon"
                  className="-mt-1 ml-1 lg:ml-0 lg:right-7 md:absolute"
                /> */}
              </li>
              <li>
                <AnchorLink
                  to={url + "#cali-fresh"}
                  title="Cali Fresh"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#kids"}
                  title="Kids"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
                {/* <img
                  src={data.addOnIcon.publicURL}
                  alt="Add-on icon"
                  className="-mt-1 ml-1 lg:ml-0 lg:right-7 md:absolute"
                /> */}
              </li>
            </ul>
          </nav>
        </div>

        {/* <section id="apps" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Passed Appetizers</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                <b>Appetizers</b> / Choose 3{/* / Add-ons */}
              {/* </span>
              {/* <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3"
              /> */}
            {/* </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {apps.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section> */} 

        <section id="burger" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Burger Flavor Mobile</h2>
              <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Entrées</b>
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {burgerPackage.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

       

        

       

        <section id="chicken-sandwich" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Chicken Sandiwch Flavor Mobile</h2>
              <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Entrées</b>
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              {chickenSandwich.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="bbq" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>BBQ Flavor Mobile</h2>
              <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Entrées</b>
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {bbq.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="rice-bowls" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Rice Bowl Flavor Mobile</h2>
              <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Entrées</b>
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {riceBowl.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="birria" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Birria Flavor Mobile</h2>
              <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Entrées</b>
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {birria.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="hawaiian" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Hawaiian Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                <b>Hawaiian</b> 
                {/* / Add-ons */}
              </span>
              {/* <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3"
              /> */}
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {hawaiian.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cali-fresh" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Cali Fresh Flavor Mobile</h2>
              <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Entrées</b>
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              {caliFresh.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        <section id="kids" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Kids Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                <b>Kids</b>
                {/* / Add-ons */}
              </span>
              {/* <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3"
              /> */}
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {kids.map((item, i) => {
                return (
                  <div key={i} className="mb-8 md:mb-10">
                    <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                      {item.name}
                    </p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider />

        <CallToAction headingLevel="h2" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Flavor Mobile Menu.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Flavor Mobile Menu.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "menus/Flavor Mobile Menu/1.0 Flavor Mobile Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "menus/Flavor Mobile Menu/1.0 Flavor Mobile Hero Mobile.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuIcon: file(relativePath: { eq: "global/menu.svg" }) {
      publicURL
    }
    addOnIcon: file(relativePath: { eq: "menus/Add-on Icon.svg" }) {
      publicURL
    }
  }
`;
export default Page;
