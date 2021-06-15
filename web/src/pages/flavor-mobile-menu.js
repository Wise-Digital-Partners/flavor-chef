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
      name: "Cowboy Flavor Burger",
      description:
        "7oz patty, pepper-jack cheese, BBQ aioli, crispy fried onions, mixed greens, brioche bun, house pickles, shoestring fries",
    },
    {
      name: "So Cal Flavor Burger",
      description:
        "7oz patty, pepper-jack cheese, peppered bacon, guacamole, mixed greens, chipotle aioli, brioche bun, house pickles, shoestring fries",
    },
    {
      name: "Beyond Flavor Burger",
      description:
        "beyond meatless patty, American cheese, arugula, caramelized onions, garlic mayo, tomato, brioche bun, house pickles, shoestring fries",
    },
  ];

  const bbq = [
    {
      name: "BBQ Brisket Sandwich",
      description:
        "smoked brisket, sweet and spicy BBQ, honey-ginger slaw, brioche bun, steak fries",
    },
    {
      name: "BBQ Pork Sandwich",
      description:
        "braised pork, peach habanero BBQ, honey-ginger slaw, brioche bun, steak fries",
    },
    {
      name: "Rib Plate",
      description: "baby back ribs, house BBQ, honey-ginger slaw, steak fries",
    },
    {
      name: "BBQ Braised Jackfruit Sandwich",
      description:
        "braised jackfruit, sweet and spicy BBQ, honey-ginger slaw, brioche bun, steak fries",
    },
  ];

  const kona = [
    {
      name: "Loco Moco",
      description:
        "beef patty, fried egg, caramelized onion demi, green onion, steamed jasmine rice, Hawaiian mac salad",
    },
    {
      name: "Kahlua Pork Sliders",
      description:
        "braised pork butt, Hawaiian sea salt, banana leaves, Korean BBQ sauce, Hawaiian slider buns, cole slaw, Hawaiian mac salad, shoestring fries",
    },
    {
      name: "Huli Huli Chicken",
      description:
        "seared bone in chicken thigh, grilled pineapple, steamed jasmine rice, Hawaiian mac salad",
    },
    {
      name: "Korean BBQ Spare Ribs",
      description:
        "Korean style bone in short rib, Fresno chilis green onion, steamed jasmine rice, Hawaiian mac salad",
    },
  ];

  const southOfTheBorder = [
    {
      name: "Baja Tacos",
      description:
        "beer battered cod, pico slaw, cilantro lime crema, corn tortilla",
    },
    {
      name: "Birria Taco",
      description:
        "braised beef, jack cheese, onion & cilantro mix, corn tortilla, consommé",
    },
    {
      name: "Chicken Adobada Quesadilla",
      description:
        "seared chicken, pineapple, jalapeno, jack cheese, flour tortilla, crema, green onion",
    },
    {
      name: "Black Bean & Yam Taquitos",
      description:
        "chipotle black bean, sweet potato, jack cheese, smoked jalapeno relish, roasted salad & guacamole",
    },
  ];

  const riceBowl = [
    {
      name: "Poke Bowl",
      description:
        "fresh ahi, house poke sauce, cucumber, carrot, green onion, cilantro, edamame, radishes, sriracha aioli, sesame seeds, steamed jasmine rice",
    },
    {
      name: "Beef Bulgogi Bowl",
      description:
        "bulgogi beef, house kimchi, fresh orange, sesame seeds, green onion, steamed jasmine rice",
    },
    {
      name: "Chicken Teriyaki Bowl",
      description:
        "chicken teriyaki, house kimchi, fresh orange, sesame seeds, green onion, steamed jasmine rice",
    },
    {
      name: "Crispy Coconut Shrimp Bowl",
      description:
        "coconut shrimp, house sweet chili sauce, green onion, jalapeno, pineapple, steamed jasmine rice",
    },
  ];

  const caliFresh = [
    {
      name: "Wild Isle Salmon Plate",
      description:
        "seared salmon, smashed coconut sweet potato, cabbage slaw, fresh citrus",
    },
    {
      name: "Steak Salad",
      description:
        "seared flank steak, arugula, chimichurri, blistered cherry tomato, crispy fried onion, marcona almonds ",
    },
    {
      name: "Citrus Chicken Plate",
      description:
        "seared chicken breast, smashed coconut sweet potato, cabbage slaw, fresh citrus",
    },
    {
      name: "Grilled Polenta Cake",
      description:
        "grilled polenta, arugula, chimichurri, tomato ragout, blistered cherry tomato",
    },
  ];

  const apps = [
    {
      name: "Deep Fried Artichoke Hearts",
      description:
        "beer battered artichoke hearts, house made buttermilk ranch",
    },
    {
      name: "Crispy Coconut shrimp",
      description: "fried coconut shrimp, house sweet chili sauce",
    },
    {
      name: "Sweet Potato black bean empanadas",
      description:
        "sweet potato, chipotle black bean, jack cheese, smoked jalapeno relish",
    },
    {
      name: "Mozzarella sticks",
      description: "fried mozzarella sticks, house made marinara ",
    },
    {
      name: "Mini Loaded Fries",
      description:
        "fresh fries, house queso, ground beef, jalapeno, green onion, crema",
    },
    {
      name: "Thai Chili Wings",
      description:
        "freshly fried wings, house sweet chili sauce, green onion, ",
    },
  ];

  const desserts = [
    {
      name: "Beignets",
      description:
        "fresh beignets, powdered sugar, chocolate raspberry drizzle",
    },
    {
      name: "Seasonal Fried Hand Pies",
      description: "seasonal fruit compote, fried pie dough",
    },
    {
      name: "Crème Brulees",
      description: "vanilla bean, sweet cream, caramelized sugar",
    },
    {
      name: "Churros",
      description: "fresh churros, cinnamon sugar, caramel drizzle",
    },
    {
      name: "Deep Fried Oreos",
      description: "deep fried oreos, chocolate syrup drizzle, powdered sugar",
    },
    {
      name: "Strawberry Cheesecake",
      description: "Wontonscream cheese, strawberry compote, fried wonton",
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
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
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
                  to={url + "#bbq"}
                  title="BBQ"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#kona"}
                  title="Kona"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#south-of-the-border"}
                  title="South of the Border"
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
                  to={url + "#cali-fresh"}
                  title="Cali Fresh"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#apps"}
                  title="Apps"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:pl-6 lg:pr-12"
                  stripHash
                />
                <img
                  src={data.addOnIcon.publicURL}
                  alt="Add-on icon"
                  className="-mt-1 ml-1 lg:ml-0 lg:right-7 md:absolute"
                />
              </li>
              <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#desserts"}
                  title="Desserts"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:pl-6 lg:pr-12"
                  stripHash
                />
                <img
                  src={data.addOnIcon.publicURL}
                  alt="Add-on icon"
                  className="-mt-1 ml-1 lg:ml-0 lg:right-7 md:absolute"
                />
              </li>
              <li className="inline-flex items-center relative">
                <AnchorLink
                  to={url + "#kids"}
                  title="Kids"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:pl-6 lg:pr-12"
                  stripHash
                />
                <img
                  src={data.addOnIcon.publicURL}
                  alt="Add-on icon"
                  className="-mt-1 ml-1 lg:ml-0 lg:right-7 md:absolute"
                />
              </li>
            </ul>
          </nav>
        </div>

        <section className="mb-12 md:mb-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-heading text-lg mb-4">
                Pick your Flavor Mobile package and choose 3 entrees from that
                package
              </p>

              <div className="flex items-center justify-center text-sm text-gray-600 text-opacity-50">
                <img
                  src={data.addOnIcon.publicURL}
                  alt="Add-on icon"
                  className="mr-3"
                />
                <span className="mr-2">=</span>
                <span>add-ons</span>
              </div>
            </div>
          </div>
        </section>

        <section id="burger" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Burger Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Burger Package</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {burgerPackage.slice(0, 2).map((item, i) => {
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
              <div>
                {burgerPackage.slice(2).map((item, i) => {
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
          </div>
        </section>

        <section id="bbq" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>BBQ Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>BBQ Package</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {bbq.slice(0, 2).map((item, i) => {
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
              <div>
                {bbq.slice(2).map((item, i) => {
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
          </div>
        </section>

        <section id="kona" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Kona Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Kona Package</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {kona.slice(0, 2).map((item, i) => {
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
              <div>
                {kona.slice(2).map((item, i) => {
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
          </div>
        </section>

        <section id="south-of-the-border" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>South of the Border Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>South of the Border Package</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {southOfTheBorder.slice(0, 2).map((item, i) => {
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
              <div>
                {southOfTheBorder.slice(2).map((item, i) => {
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
          </div>
        </section>

        <section id="rice-bowls" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Rice Bowl Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Rice Bowls Package</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {riceBowl.slice(0, 2).map((item, i) => {
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
              <div>
                {riceBowl.slice(2).map((item, i) => {
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
          </div>
        </section>

        <section id="cali-fresh" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Cali Fresh Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Cali Fresh Package</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {caliFresh.slice(0, 2).map((item, i) => {
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
              <div>
                {caliFresh.slice(2).map((item, i) => {
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
          </div>
        </section>

        <section id="apps" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Passed Hors D‘eouvres</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                <b>Apps</b> / Add-ons
              </span>
              <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {apps.slice(0, 3).map((item, i) => {
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
              <div>
                {apps.slice(3).map((item, i) => {
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
          </div>
        </section>

        <section id="desserts" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Desserts</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                <b>Dessert</b> / Add-ons
              </span>
              <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {desserts.slice(0, 3).map((item, i) => {
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
              <div>
                {desserts.slice(3).map((item, i) => {
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
          </div>
        </section>

        <section id="kids" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Kids Flavor Mobile</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12 flex items-center">
              <span>
                <b>Kids</b> / Add-ons
              </span>
              <img
                src={data.addOnIcon.publicURL}
                alt="Add-on icon"
                className="ml-3"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {kids.slice(0, 2).map((item, i) => {
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
              <div>
                {kids.slice(2).map((item, i) => {
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
      relativePath: { eq: "open-graph/facebook/Homepage_FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage_TW.jpg" }
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
