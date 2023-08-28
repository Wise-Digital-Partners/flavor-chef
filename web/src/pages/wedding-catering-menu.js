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
      description: "cremini duxelle, goat cheese, caramelized onion, parme- san, basil",
    },
    {
      name: "Bacon Wrapped Date",
      description:
        "applewood smoked bacon, medjool date, goat cheese, car- amelized onion, basil, balsamic reduction",
    },
    {
      name: "Mini Crab Cake",
      description: "lump crab, onion, bell pepper, basil, cajun remoulade",
    },
    {
      name: "Sweet Potato Empanada",
      description:
        "roasted sweet potato, black beans, cheese, chipotle aioli, smoked jalapeño relish",
    },
    {
      name: "Short Rib Empanada",
      description:
        "braised beef short rib, cheddar cheese, jalapeno, avocado salsa verde, green onion",
    },
    {
      name: "Avocado Toast",
      description:
        "avocado, pickled red onion, kumquat, ciabatta toast, ev- erything bagel seasoning, micro cilantro",
    },
    {
      name: "Steak & Brie Crostini",
      description: "NY strip steak, brie, caramelized onion, Dijon, toasted baguette, parsley",
    },
    {
      name: "Pork Belly Bao Bun",
      description: "Braised pork belly, sweet & spicy glaze, pickled vegetables, cilantro, steamed bun",
    },
    {
      name: "Filet Mignon Skewer",
      description: "dry rubbed beef tenderloin, red chimichurri, micro cilantro",
    },
    {
      name: "Poke Crisp",
      description:
        "ahi tuna, tamari, ginger, scallion, sesame seeds, crispy wonton, sriracha aioli",
    },
    {
      name: "Chicken & Waffle",
      description:
        "fried chicken breast, buttermilk waffle, buffalo maple glaze, house pickle",
    },
    {
      name: "Lollipop Lamb Chop",
      description:
        "New Zealand grass fed lamb, rosemary, garlic, mustard dill sauce",
    },
    {
      name: "Pesto Caprese Crostini",
      description:
        "pesto, heirloom cherry tomato, pearl mozzarella, ciabatta crostini, balsamic reduction, basil",
    },
    
    {
      name: "Spam Musubi",
      description: "fried spam, hoisin ginger glaze, sushi rice, seaweed, furikake",
    },
  ];

  const appetizerDisplay = [
    {
      name: "The Hodge Podge",
      description:
        "Chef selection of cheeses, dried and cured meats, locally sourced vegetables, hummus, grapes, fresh berries, dried fruit, marcona almonds, seasonal jam, honeycomb, crackers",
    },
    {
      name: "Mediterranean Mezze Display",
      description:
        "locally sourced vegetables, hummus, spinach & artichoke dip, cucumber tzatziki, olives, artichoke hearts, warm naan, lavash",
    },
   
  ];

  const buffetSalads = [
    {
      name: "Bistro Salad",
      description:
        "organic greens, locally sourced fruit, heirloom carrot, cucumber, radish, feta, candied pecan, seasonal balsamic vinaigrette",
    },
    {
      name: "Organic Green Salad",
      description:
        "organic greens, heirloom carrot, cucumber, radish, cherry tomato, balsamic vinaigrette",
    },
    {
      name: "Butter Lettuce Caesar",
      description:
        "butter lettuce, baby greens, focaccia crouton, blistered cherry tomato, heirloom radish, house dressing, Parmesan Reggiano",
    },
  ];

  const buffetVeggies = [
    {
      name: "Sauteed Broccolini",
      description: "broccolini, garlic butter, sea salt",
    },
    {
      name: "Farmer’s Market Medley ",
      description:
        "sauteed seasonal vegetables, garlic, fine herbs, butter",
    },
    {
      name: "Roasted Heirloom Carrots",
      description:
        "heirloom carrots, za’atar, cumin, crumbled feta, honey drizzle, parsley",
    },
    {
      name: "Roasted Vegetable Platter",
      description: "seasonal squash, asparagus, broccolini, bell pepper, mush- rooms, balsamic vinegar",
    },
  ];

  const buffetStarches = [
    {
      name: "Garlic Mashed Potatoes",
      description: "Yukon gold potato, cream, roasted garlic, butter, chives",
    },
    {
      name: "Roasted Potatoes",
      description: "fingerling potatoes, rosemary, parsley, garlic, Calabrian chili oil",
    },
    {
      name: "Citrus Risotto",
      description: "arborio rice, thyme, lemon zest, Parmesan Reggiano",
    },
    {
      name: "Pesto Primavera Orzo",
      description: "orzo pasta, pesto, artichoke heart, blistered cherry tomato, toasted pine nuts",
    },
  ];

  const buffetMains = [
    {
      name: "Roasted Chicken Breast",
      description: "Jidori airline chicken breast, seasonal chutney",
    },
    {
      name: "Seared Chicken Thigh",
      description: "bone in, skin on chicken thigh, wild mushroom cream sauce",
    },
    {
      name: "Local Catch",
      description: "seasonal catch, tomato & fennel ragout",
    },
    {
      name: "Seared Salmon",
      description: "Wild Isle salmon, orange, basil",
    },
    {
      name: "Grilled Flank Steak",
      description:
        "Cedar River Farms flank steak, garlic, herbs, Argentinian chimichurri, Fresno chili peppers",
    },
    {
      name: "Braised Beef Short Ribs",
      description:
        "Cedar River Farms boneless beef short rib, traditional vegetables, roasted cippolini onion, red wine jus, parsley",
    },
    {
      name: "Prime Rib Carving",
      description:
        "slow roasted prime rib, green peppercorn brandy cream sauce, horseradish cream, giardiniera",
    },
    {
      name: "Beef Tenderloin Carving",
      description:
        "whole roasted beef tenderloin, green peppercorn brandy cream sauce, horseradish cream, giardiniera",
    },
    {
      name: "Spinach Stuffed Mushroom",
      description:
        "portabella mushroom, creamy spinach, artichoke heart, Parmesan Reggiano",
      plantBased: true,
    },
    {
      name: "Tofu Ricotta & Pesto Manicotti",
      description:
        "herbed tofu ricotta, basil, mozzarella, pesto cream sauce, toasted pine nuts, roasted cherry tomatoes",
      plantBased: true,
    },
  ];

  const platedSalads = [
    {
      name: "Butter Lettuce Caesar",
      description:
        "butter lettuce, focaccia crouton, house dressing, blistered cherry tomato, heirloom radish, parmesan Reggiano",
    },
    {
      name: "Bistro Salad",
      description:
        "organic greens, locally sourced fruit, heirloom carrot, cucumber, radish, feta, candied pecan, seasonal balsamic vinaigrette",
    },
    {
      name: "Beet Salad",
      description:
        "roasted red & gold beets, organic greens, arugula, heir- loom carrot, cucumber, radish, crumbled goat cheese, toasted pistachios, citrus vinaigrette",
    },
  ];

  const platedVeggies = [
    {
      name: "Grilled Asparagus",
      description: "sea salt, lemon, extra virgin olive oil",
    },
    {
      name: "Petit Heirloom Carrots",
      description: "butter, garlic, fine herbs",
    },
    {
      name: "Sautéed Broccolini ",
      description: "butter, garlic, sea salt",
    },
  ];

  const platedStarches = [
    {
      name: "Garlic Mashed Potatoes",
      description: "Yukon gold potato, cream, roasted garlic, butter",
    },
    {
      name: "Citrus Risotto",
      description: "arborio rice, thyme, lemon zest, parmesan Reggiano",
    },
    {
      name: "Golden Gratin",
      description: "Yukon gold potato, fennel, cream, gruyere cheese",
    },
    {
      name: "Corn Polenta",
      description: "creamy polenta, sweet corn, thyme, Parmesan Reggiano",
    },
  ];

  const platedMains = [
    {
      name: "Roasted Chicken Breast",
      description:
        "Jidori airline chicken breast, seasonal chutney",
    },
    {
      name: "Seared Salmon",
      description: "Wild Isle salmon, orange, basil",
    },
    {
      name: "Local Catch",
      description: "seasonal catch, tomato & fennel ragout",
    },
    {
      name: "Braised Beef Short Ribs",
      description:
        "Cedar River Farms boneless beef short rib, traditional vegetables, roasted cippolini onion, red wine jus, parsley",
    },
    {
      name: "Seared Filet Mignon",
      description:
        "7oz center cut filet mignon, green peppercorn cream sauce",
    },
    {
      name: "Split Maine Lobster Tail",
      description: "1⁄2 8oz lobster tail, garlic butter, fine herbs, lemon",
    },
    {
      name: "Roasted Ratatouille Stack",
      description:
        "eggplant, zucchini, squash, bell pepper, marinara, micro basil",
      plantBased: true,
    },
    {
      name: "Seared Polenta Cake",
      description:
        "Polenta, thyme, tomato & fennel ragout, Parmesan Reggiano",
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
