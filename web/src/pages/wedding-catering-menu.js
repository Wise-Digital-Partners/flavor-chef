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

  const passedHorsDeouvres = [
    {
      name: "Sausage Stuffed Mushroom",
      description: "cremini, smoked gouda, sausage, sage, parmesan",
    },
    {
      name: "Bacon Wrapped Date",
      description:
        "medjool date, applewood smoked bacon, goat cheese, caramelized onions, basil, balsamic reduction",
    },
    {
      name: "Mini Crab Cake",
      description: "lump crab, onions, peppers, cajun aioli",
    },
    {
      name: "Sweet Potato Empanada",
      description:
        "roasted sweet potato, black beans, cheese, smoked jalapeño relish, chipotle aioli",
    },
    {
      name: "Avocado Toast",
      description:
        "fresh avocado, Prager Brothers spelt bread, heirloom tomato, everything bagel spice",
    },
    {
      name: "Steak & Brie Crostini",
      description: "NY strip steak, brie, caramelized onion, dijon",
    },
    {
      name: "Heirloom Tomato Bruschetta",
      description: "Heirloom Tomato Bruschetta",
    },
    {
      name: "Filet Mignon Skewer",
      description: "beef tenderloin, house dry rub, chimichurri",
    },
    {
      name: "Chicken Shawarma Canape",
      description:
        "spiced chicken, blistered cherry tomato, toasted naan, cashew tamarind sauce",
    },
    {
      name: "Mini Sope",
      description:
        "black bean puree, blistered shishito pepper, cotija, pickled onion",
    },
    {
      name: "Ahi Poke Crisps",
      description:
        "crispy wonton, tamari, ginger, scallion, sesame seeds, sriracha aioli",
    },
    {
      name: "Hot Honey & Kale Crostini",
      description:
        "fried kale, spicy honey, whipped herb ricotta, toasted baguette",
    },
    {
      name: "Chicken & Waffle",
      description:
        "fried chicken, buttermilk waffle, buffalo maple glaze, house pickle",
    },
    {
      name: "Lamb Chops",
      description: "marinated lamb chop, rosemary, mustard dill sauce",
    },
    {
      name: "Spam Musubi",
      description: "fried spam, sushi rice, seaweed",
    },
  ];

  const appetizerDisplay = [
    {
      name: "Seasonal Crudites",
      description:
        "seasonal vegetables, warm pita chips, artichoke spinach dip, sprouted bean hummus",
    },
    {
      name: "Chips & Dips",
      description:
        "House made salsa, fresh guacamole, chipotle queso with tortilla chips",
    },
    {
      name: "The Hodge Podge",
      description:
        "variety of cheeses, dried fruit, toasted nuts, crackers, baguette, assorted fresh fruit, berries, seasonal vegetables, sprouted bean hummus, dried and cured meats, seasonal jams",
    },
  ];

  const buffetSalads = [
    {
      name: "Bistro Salad",
      description:
        "organic greens, candied pecan, seasonal fruits, heirloom carrot, cucumber, radish, feta, orange balsamic, EVOO",
    },
    {
      name: "Organic Green Salad",
      description:
        "organic greens, heirloom carrot, cucumber, radish, cherry tomato, infused balsamic, EVOO",
    },
    {
      name: "House Salad",
      description:
        "baby greens, slivered red onion, pepperoncini, carrot, radish, cucumber, red wine vinaigrette, parmesan Reggiano",
    },
  ];

  const buffetVeggies = [
    {
      name: "Farmer’s Market Medley ",
      description:
        "seasonal vegetables, broccoli, cauliflower, heirloom carrot, summer squash, garlic, herbs, butter",
    },
    {
      name: "Seasonal Roasted Vegetable Platter",
      description:
        "grilled asparagus, seasonal squash, broccolini, bell pepper, roasted mushrooms, balsamic vinegar, EVOO",
    },
    {
      name: "Sauteed Broccolini",
      description: "Broccolini, garlic, butter",
    },
  ];

  const buffetStarches = [
    {
      name: "Garlic Mashed Potatoes",
      description: "Yukon gold potato, cream, roasted garlic, butter ",
    },
    {
      name: "Roasted Fingerling Potatoes",
      description: "fingerling potatoes, fresh herbs, garlic ",
    },
    {
      name: "Citrus Risotto",
      description: "arborio rice, thyme, lemon zest, parmesan ",
    },
    {
      name: "Cacio E Pepe",
      description: "Spaghetti noodles, butter, cracked black pepper, Pecorino",
    },
  ];

  const buffetMains = [
    {
      name: "Pan Roasted Chicken",
      description: "Seared chicken breast, Dijon, champagne cream sauce",
    },
    {
      name: "Chicken Parmesan",
      description: "chicken breast, panko, house marinara, mozzarella,",
    },
    {
      name: "Pan Seared Salmon",
      description: "Wild Isle salmon, orange, basil, California EVOO",
    },
    {
      name: "Citrus Seabass",
      description: "local seabass, tomato & fennel ragout",
    },
    {
      name: "Grilled Flank Steak",
      description:
        "Cedar River Farms flank steak, garlic, herbs, Argentinian chimichurri, Fresno chili peppers ",
    },
    {
      name: "Braised Beef Short Ribs",
      description:
        "Cedar River Farms boneless beef short rib, traditional vegetables, fresh herbs, red wine jus",
    },
    {
      name: "Prime Rib Carving",
      description:
        "slow roasted Prime Rib, au jus, horseradish cream, giardiniera",
    },
    {
      name: "Spinach Stuffed Mushroom",
      description:
        "Portabella mushroom, creamy spinach, artichoke heart, parmesan",
      plantBased: true,
    },
    {
      name: "Eggplant Parmesan",
      description:
        "panko crusted eggplant, house marinara, parmesan Reggiano , fresh basil",
      plantBased: true,
    },
  ];

  const platedSalads = [
    {
      name: "Butter Lettuce Caesar",
      description:
        "butter lettuce, garlic crouton, house dressing, blistered cherry tomato, parmesan Reggiano",
    },
    {
      name: "Bistro Salad",
      description:
        "organic greens, candied pecan, seasonal fruits, heirloom carrot, cucumber, radish, feta, orange balsamic, EVOO",
    },
    {
      name: "Wedge Salad",
      description:
        "baby iceburg lettuce, house Point Reyes blue cheese, heirloom cherry tomatoes, crumbled bacon, green onion",
    },
  ];

  const platedVeggies = [
    {
      name: "Grilled Asparagus",
      description: "grilled asparagus, sea salt, lemon, EVOO",
    },
    {
      name: "Petit Heirloom Carrots",
      description: "Heirloom carrots, butter, garlic, fresh herbs",
    },
    {
      name: "Sautéed Broccolini ",
      description: "broccolini, garlic, sea salt, butter",
    },
  ];

  const platedStarches = [
    {
      name: "Garlic Mashed Potatoes",
      description: "Yukon gold potato, cream, roasted garlic, butter ",
    },
    {
      name: "Sweet Potato Mash",
      description: "Garnet yam, coconut milk, nutmeg",
    },
    {
      name: "Spring Pea Risotto",
      description: "arborio rice, lemon zest, fresh peas mascarpone, parmesan",
    },
    {
      name: "Roasted Fingerling Potatoes",
      description: "fingerling potatoes, fresh herbs, garlic",
    },
  ];

  const platedMains = [
    {
      name: "Pan Roasted Chicken",
      description:
        "Jidori airline chicken breast, creamy white wine Dijon sauce",
    },
    {
      name: "Pan Seared Salmon",
      description: "Wild Isle salmon, orange, basil, California EVOO",
    },
    {
      name: "Citrus Sea Bass",
      description: "citrus marinated local seabass, tomato & fennel ragout",
    },
    {
      name: "Stuffed Lobster Tail",
      description:
        "Butterflied Maine lobster tail, lump crab, bell pepper, onion, Old Bay, panko breadcrumbs",
    },
    {
      name: "Braised Beef Short Ribs",
      description:
        "Cedar River Farms boneless beef short rib, traditional vegetables, fresh herbs, red wine jus",
    },
    {
      name: "Pepper Crusted Filet Mignon",
      description: "center cut filet mignon, tamarind mushroom demi",
    },
    {
      name: "Spinach Stuffed Mushroom",
      description:
        "Portabella mushroom, creamy spinach, artichoke heart, parmesan",
      plantBased: true,
    },
    {
      name: "Grilled Polenta Cake",
      description:
        "organic polenta, fresh herbs, tomato ragout, parmesan Reggiano",
      plantBased: true,
    },
  ];

  const chefInteractiveStations = [
    {
      name: "Garden Station",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>organic green salad</li>
            <li>bistro salad</li>
            <li>seasonal roasted vegetable platter</li>
          </ul>
        </>
      ),
    },
    {
      name: "Burger Sliders",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>Kobe beef sliders, brioche buns</li>
            <li>caramelized onion, American cheese</li>
            <li>arugula, roasted garlic aioli</li>
          </ul>
        </>
      ),
    },
    {
      name: "French Fry Station ",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>freshly fried fries, parmesan herb mix</li>
            <li>sriracha ketchup, house made ranch, Flavor Fry Sauce</li>
            <li>(must be ordered with slider station)</li>
          </ul>
        </>
      ),
    },
    {
      name: "Argentine Grill ",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>freshly grilled Santa Maria style tri tip</li>
            <li>roasted salsa, fresh garlic bread</li>
          </ul>
        </>
      ),
    },
    {
      name: "Pasta Bar",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>Penne, marinara and alfredo</li>
            <li>chicken breast and Italian sausage</li>
            <li>spinach, mushroom, tomato</li>
            <li>parmesan cheese, pepper flakes</li>
          </ul>
        </>
      ),
    },
    {
      name: "Birria Tacos",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>beef or chicken birria tacos</li>
            <li>jack cheese, Consommé</li>
            <li>onion, cilantro, radish</li>
          </ul>
        </>
      ),
    },
    {
      name: "Yakisoba Wok",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>Yakisoba noodles</li>
            <li>teriyaki sauce shitake, broccoli, cabbage</li>
            <li>beef or chicken</li>
          </ul>
        </>
      ),
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
        title="Wedding Catering Menu | Flavor Chef Catering"
        description="Add an extra special touch to your big day with fresh dishes from Flavor Chef Catering. Our wedding catering menu features locally sourced ingredients."
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
        <h1 className="text-white mb-0">Wedding</h1>
      </HeroFullWidth>

      <div className="relative">
        <div
          className={`bg-black bg-opacity-50 h-full w-full absolute transition-all duration-300 ease-linear z-10 lg:hidden ${setOverlay}`}
        ></div>
        <div
          className="bg-primary-900 lg:bg-transparent flex justify-between text-white py-3 lg:py-0 px-4 lg:px-0 lg:mt-12 mb-16 lg:mb-24 sticky lg:relative top-[61px] lg:top-0 cursor-pointer lg:cursor-auto z-20"
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
              className={`px-14 lg:px-0 flex flex-col lg:flex-row space-y-4 lg:space-y-0 w-full lg:w-auto overflow-y-scroll lg:overflow-visible transition-all duration-300 ease-linear ${setHeight}`}
            >
              <li>
                <AnchorLink
                  to={url + "#appetizers"}
                  title="Appetizers"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#buffet"}
                  title="Buffet"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#plated"}
                  title="Plated"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#chef-interactive-stations"}
                  title="Chef Interactive Stations"
                  className="font-display text-lg lg:text-base tracking-wider leading-5 text-gray-600 lg:text-primary-400 hover:text-primary-400 lg:hover:bg-primary-50 no-underline lg:py-3 lg:px-6"
                  stripHash
                />
              </li>
            </ul>
          </nav>
        </div>

        <section id="appetizers" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Appetizers</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Passed Hors D‘eouvres</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {passedHorsDeouvres.slice(0, 7).map((item, i) => {
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
                {passedHorsDeouvres.slice(7).map((item, i) => {
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

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Appetizer Display</b> / Choose 1
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
              <div>
                {appetizerDisplay.slice(0, 2).map((item, i) => {
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
                {appetizerDisplay.slice(2).map((item, i) => {
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

        <section id="buffet" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Buffet</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Salads</b> / Choose 1
                  </div>
                  {buffetSalads.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Veggies</b> / Choose 1
                  </div>
                  {buffetVeggies.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Starches</b> / Choose 1
                  </div>
                  {buffetStarches.map((item, i) => {
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

              <div>
                <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                  <b>Mains</b> / Choose 2
                </div>
                {buffetMains.map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      {item.plantBased && (
                        <div className="bg-[#269566] text-center text-white text-xs px-3 py-1.5 mb-3 rounded inline-flex">
                          Plant Based
                        </div>
                      )}
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

        <section id="plated" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Plated</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Salads</b> / Choose 1
                  </div>
                  {platedSalads.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Veggies</b> / Choose 1
                  </div>
                  {platedVeggies.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Starches</b> / Choose 1
                  </div>
                  {platedStarches.map((item, i) => {
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

              <div>
                <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                  <b>Mains</b> / Choose 1 or 2
                </div>
                {platedMains.map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      {item.plantBased && (
                        <div className="bg-[#269566] text-center text-white text-xs px-3 py-1.5 mb-3 rounded inline-flex">
                          Plant Based
                        </div>
                      )}
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

        <section id="chef-interactive-stations" className="mb-8 md:mb-10">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Chef Interactive Stations</h2>
            </header>

            <div className="mb-10">
              <div>
                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    Choose 3-4 Stations
                  </div>

                  <div className="md:columns-2 md:gap-x-10 lg:gap-x-20">
                    {chefInteractiveStations.map((item, i) => {
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
      relativePath: { eq: "open-graph/facebook/Wedding Menu.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Wedding Menu.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "menus/Wedding Menu/1.0 Weddings Menu Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "menus/Wedding Menu/1.0 Weddings Menu Hero Mobile.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuIcon: file(relativePath: { eq: "global/menu.svg" }) {
      publicURL
    }
  }
`;
export default Page;
