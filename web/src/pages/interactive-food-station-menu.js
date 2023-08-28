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

  const garden = [
    {
      name: "Bistro Salad",
      description: "organic greens, seasonal fruits, heirloom carrot, cucumber, radish, feta, candied pecan, seasonal balsamic vinaigrette",
    },
    {
      name: "Seasonal Roasted Vegetable Platter",
      description: "asparagus, seasonal squash, broccolini, bell pepper, mushrooms, balsamic vinegar, EVOO",
    },
    {
      name: "Butter Lettuce Caesar",
      description: "butter lettuce, baby greens, focaccia crouton, house dressing, blistered cherry tomato, slivered seasonal radish, parmesan Reggiano",
    },
    {
      name: "  ",
      description:
        "  ",
    },
  ];

  const pasta = [
    {
      name: "Short Rib Bolognese ",
      description: "penne pasta, Bolognese sauce, braised beef short rib, Parmesan Reggiano, red pepper flakes ",
    },
    {
      name: "Tuscan Chicken Alfredo ",
      description: "penne pasta, alfredo sauce , spinach, cherry tomato, herbed chicken, Parmesan Reggiano, red pepper flakes ",
    },
  ];

 

  const poke = [
   
    {
      name: "Ahi Tuna Bowl ",
      description: "marinated ahi tuna, steamed jasmine rice, cucumber, carrot, green onion, cilantro, edamame, radishes, sriracha aioli, sesame seeds ",
    },
    {
      name: "Spicy Tuna Bowl ",
      description: "spicy marinated ahi tuna, steamed jasmine rice, cucumber, carrot, green onion, cilantro, edamame, radishes, sriracha aioli, sesame seed ",
    },
  ];

  const wok = [
    {
      name: "Beef Bulgogi ",
      description: "beef bulgogi, yakisoba noodles, shitake, broccoli, cabbage, sriracha, soy sauce ",
    },
    {
      name: "Veggie Stir Fry ",
      description: "yakisoba noodles, shitake, broccoli, cabbage, sriracha, soy sauce ",
    },
  ];

  const sliders = [
    {
      name: "Kobe beef slider ",
      description: "American cheese, arugula, roasted garlic aioli, brioche bun ",
    },
    {
      name: "Shoestring fries ",
      description: "parmesan herb mix, sriracha ketchup, house made ranch ",
    },
  ];

  const streetTaco = [
    {
      name: "Carnitas tacos ",
      description: "arrangement of roasted salsa, fresh guacamole, pickled red onion, onion & cilantro mix",
    },
    {
      name: "Chicken Adobada tacos ",
      description: "arrangement of roasted salsa, fresh guacamole, pickled red onion, onion & cilantro mix ",
    },
  
  ];

  const pizza = [
    {
      name: "Margherita Pizza ",
      description: "heirloom tomato, buffalo mozzarella, garlic, fresh basil, EVOO, locally made dough, crushed red pepper flakes ",
    },
    {
      name: "Pepperoni Pizza ",
      description: "house made marinara, mozzarella, Parmesan Reggiano, pepperoni, locally made dough, crushed red pepper flakes ",
    },
  ];

  const parmesan = [
    {
      name: "Cacio E Pepe ",
      description: "freshly spun in whole parmesan wheel ",
    },
    {
      name: "  ",
      description:
        "  ",
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
        <h1 className="text-white mb-0">Interactive Stations</h1>
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
                  to={url + "#garden"}
                  title="Garden"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              
              <li>
                <AnchorLink
                  to={url + "#pasta"}
                  title="Pasta"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#poke"}
                  title="Poke Bowl"
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
                  to={url + "#wok"}
                  title="Wok Station"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#sliders"}
                  title="Sliders & Fries"
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
                  to={url + "#streetTacos"}
                  title="Street Tacos"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#pizza"}
                  title="Pizza"
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
                  to={url + "#parmesan"}
                  title="Parmesan"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
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
        <div className="mb-14">
          <p className="mx-auto text-center mb-6 font-heading"><b>Interactive stations require a minimum guest count of approximately 75 guests. </b></p>
          <p className="mx-auto text-center mb-6 font-heading"><b>Please choose three to four stations.</b> </p>
        </div>
        <section id="garden" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Garden Station</h2>
              {/* <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p> */}
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              {/* <b>Entrées</b> */}
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {garden.map((item, i) => {
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

       

        

       

        <section id="pasta" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Pasta Small Plate Station</h2>
              
                <p className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase flex items-center">Freshly made chef small plates on display</p>
               
             
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              {/* <b>Entrées</b> */}
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              {pasta.map((item, i) => {
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

        <section id="poke" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Poke Bowl Small Plate Station</h2>
              {/* <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p> */}
              <p className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase flex items-center">Freshly made chef small plates on display</p>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              {/* <b>Entrées</b> */}
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {poke.map((item, i) => {
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

        <section id="wok" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Wok Station</h2>
              <p className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase flex items-center">Freshly made “take out” containers with chop sticks</p>
              {/* <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p> */}
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              {/* <b>Entrées</b> */}
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {wok.map((item, i) => {
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

        <section id="sliders" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Sliders & Fries Station</h2>
              {/* <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p> */}
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              {/* <b>Entrées</b> */}
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {sliders.map((item, i) => {
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
        <section id="streetTaco" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Street Taco Station</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                {/* <b>Hawaiian</b>  */}
                {/* / Add-ons */}
              </span>
              {/* <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3"
              /> */}
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {streetTaco.map((item, i) => {
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

        <section id="pizza" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Pizza Station</h2>
              {/* <p className="font-heading font-bold mb-5">
                <i>
                  Choose 1 Entrée Package and estimate how many of each item
                  you’d like to order. <br />
                  Each guest allowed one entrée per person
                </i>
              </p> */}
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              {/* <b>Entrées</b> */}
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              {pizza.map((item, i) => {
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


        <section id="parmesan" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Parmesan Wheel Station</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                <p><b>Freshly made chef small plates on display | *aged parmesan wheel is an additional cost on top of menu price.</b></p>
               
                {/* / Add-ons */}
              </span>
               <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3 -mt-6"
              /> 
            </div>
            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20 mb-24">
              {parmesan.map((item, i) => {
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
